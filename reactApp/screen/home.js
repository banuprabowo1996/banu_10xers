import { View, Text, Images, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/card'

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
            <Text>Home</Text>
            <FlatList
                data={collections}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
            />
        </View>
    )
}

export default Home