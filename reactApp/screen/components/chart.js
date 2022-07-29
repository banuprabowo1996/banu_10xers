import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";

const Chart = ({ chartValue }) => {

    // const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]
    const result = []
    const dataValue = chartValue?.forEach(el => {
        result.push({ value: el })
    })
    return (
        <LineChart data={result} style={styles.chart} />
    )
}

export default Chart

const styles = StyleSheet.create({
    chart: {
        height: 50
    }
})