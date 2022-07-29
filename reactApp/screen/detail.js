import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Detail = ({ route }) => {

    const [collectionById, setCollectionById] = useState()

    useEffect(() => {
        axios.get(`https://api-generator.retool.com/j3Iz08/collections/${id}`)
            .then(response => {
                const data = response.data
                console.log(data);
                setCollectionById(data)
            })
            .catch(err => {
                console.log(err);
                throw new Error(`message: ${err}`)
            })
    }, [])
    const { id } = route.params

    return (
        <View style={styles.font}>
            <Text>{collectionById?.name}</Text>
            <Text></Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    font: {
        color: "black"
    }
})