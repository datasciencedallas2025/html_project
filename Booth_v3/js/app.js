//File Path to data 
const jsonFILEPATH = "data/data_1.json";

//Dim and margins
const width = 800;
const height = 400;
const barPadding = 5;

//Load JSON
d3.json(jsonFILEPATH).then(data => {
    //sort by pop and select top 10
    const sortedData = data
        .sort((a, b) => a.population - b.population)
        .slice(0,10);
    
    //Create SVG cointainer
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    //Scaling
    const xScale = d3.scaleBand()
        .domain(sortedData.map(d => d.name))
        .range([0, width])
        .padding(0.1);
    
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(sortedData, d => d.population)])
        .range([height, 0]);

    //Create bars
    svg.selectAll("rect")
        .data(sortedData)
        .enter()
        .append("rect")
        .attr("x", d => xScale(d.name))
        .attr("y", d => yScale(d.population))
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - yScale(d.population))
        .attr("fill", "steelblue");

    //Add labels
    svg.selectAll("text")
        .data(sortedData)
        .enter()
        .append("text")
        .text(d => d.name)
        .attr("x", d => xScale(d.name) + xScale.bandwidth() / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")
        .attr("fill", "#333");
}).catch(error => {
    console.error("Error loading JSON data:", error);
});