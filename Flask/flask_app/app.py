import numpy as np
import pandas as pd
from sqlalchemy import create_engine
from flask import Flask, jsonify

app = Flask(__name__)

# Load CSV with pandas
df = pd.read_csv("data.csv")
df["value_doubled"] = np.round(df["value"] * 2, 2)

# Set up in-memory SQLite database
engine = create_engine("sqlite:///:memory:")
df.to_sql("sample_table", con=engine, index=False, if_exists="replace")

@app.route("/")
def home():
    return "Welcome to the Flask + Pandas API!"

@app.route("/data")
def data():
    result_df = pd.read_sql("SELECT * FROM sample_table", con=engine)
    return jsonify(result_df.to_dict(orient="records"))

if __name__ == "__main__":
    app.run(debug=True)
