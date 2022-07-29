import { View, Text, Images, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card'
// import { styles } from 'react-native-gifted-charts/src/BarChart/styles'

const Home = () => {

    const [collections, setCollections] = useState()

    useEffect(() => {
        axios.get("https://api-generator.retool.com/j3Iz08/collections")
            .then(response => {
                let data = response.data
                console.log(data);
                setCollections(data)
            })
            .catch(err => {
                console.log(err);
                throw new Error(`message:${err}`)
            })
    }, [])

    const renderItem = ({ item }) => (
        <Card collection={item} />
    );
    return (
        <View>
            <Text style={styles.title}>Collection</Text>
            <FlatList
                data={collections}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={1}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginVertical: 10,
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    }
})