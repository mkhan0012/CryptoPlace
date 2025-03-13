import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({ historicalData }) => {
    // Initialize state to hold chart data
    const [data, setData] = useState([["Date", "Prices"]])

    useEffect(() => {
        // Create a copy of the initial data structure
        let dataCopy = [["Date", "Prices"]];

        // Check if historicalData and historicalData.prices are defined and is an array
        if (historicalData && Array.isArray(historicalData.prices) && historicalData.prices.length > 0) {
            // Map through the prices and format the data
            historicalData.prices.map((item) => {
                dataCopy.push([new Date(item[0]).toLocaleDateString(), item[1]])
            })
            // Update the state with the formatted data
            setData(dataCopy);
        }
    }, [historicalData])

    return (
        <Chart
            chartType='LineChart' // Specify the type of chart
            data={data} // Pass the data to the chart
            height="100%" // Set the height of the chart
            legendToggle // Enable legend toggle
        />
    )
}

export default LineChart
