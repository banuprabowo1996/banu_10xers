import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Card = ({ collection }) => {

    const navigation = useNavigation()
    const onPress = () => navigation.navigate('Detail', {
        id: collection.id
    })
    return (
        <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image
                    style={{
                        height: 150,
                        width: "100%",
                        borderRadius: 12,
                    }}
                    source={{ uri: collection.image_url }}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>{collection.name}</Text>
                <Text>Number Owned Token</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "white",
        padding: 5,
        margin: 4,
        flex: 1,
        borderRadius: 12
    },
    imageContainer: {
        flex: 4,
        backgroundColor: "#lightgrey",
    },
    contentContainer: {
        flex: 1,
    },
    text: {
        color: '#141d26',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#03adfc",
        padding: 5,
        borderRadius: 30,
    },
    pressHere: {
        color: 'white',
    }
})