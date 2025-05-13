// Scatter Plot
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(data) {
    const xData = data.map(row => row.Date);
    const yData = data.map(row => row['AAPL.High']);

    const trace = {
        x: xData,
        y: yData,
        mode: 'markers',
        type: 'scatter'
    };

    Plotly.newPlot('scatter-plot', [trace]);
});

// Pie Chart - AAPL Stock High Prices Distribution
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv', function(data) {
    const dates = data.map(row => row.Date);
    const highPrices = data.map(row => parseFloat(row['AAPL.High']));

    const trace = {
        labels: dates.slice(0, 10),  // Limit to the first 10 dates for clarity
        values: highPrices.slice(0, 10),
        type: 'pie',
        textinfo: 'label+percent',
        hoverinfo: 'label+percent+value',
        marker: {
            colors: ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c', '#34495e', '#d35400', '#8e44ad', '#2c3e50']
        }
    };

    const layout = {
        title: 'AAPL High Prices Distribution (First 10 Days)',
        margin: { l: 50, r: 50, t: 50, b: 50 }
    };

    Plotly.newPlot('pie-chart', [trace], layout);
});

// Bar Chart
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_usa_states.csv', function(data) {
    const xData = data.map(row => row.State);
    const yData = data.map(row => row.Population);

    const trace = {
        x: xData,
        y: yData,
        type: 'bar'
    };

    Plotly.newPlot('bar-chart', [trace]);
});

// Bubble Chart
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv', function(data) {
    const xData = data.map(row => row.gdpPercap);
    const yData = data.map(row => row.lifeExp);
    const sizeData = data.map(row => row.pop);

    const trace = {
        x: xData,
        y: yData,
        mode: 'markers',
        marker: {
            size: sizeData.map(size => size / 1000000),
            sizemode: 'area'
        }
    };

    Plotly.newPlot('bubble-chart', [trace]);
});
