import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

const Chart = ({ chartValue }) => {

    console.log(chartValue, 'dari component');
    const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]
    // const dataValue = chartValue.forEach(el => {})
    // console.log(dataValue);
    return (
        <LineChart data={data} style={styles.chart} />
    )
}

export default Chart

const styles = StyleSheet.create({
    chart: {
        height: 50
    }
})