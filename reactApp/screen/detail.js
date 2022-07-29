import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from './components/chart'

const Detail = ({ route }) => {

    const [collectionById, setCollectionById] = useState()
    const [stats, setStats] = useState()

    useEffect(() => {
        axios.get(`https://api-generator.retool.com/j3Iz08/collections/${id}`)
            .then(response => {
                const data = response.data
                setCollectionById(data)
            })
            .catch(err => {
                console.log(err);
                throw new Error(`message: ${err}`)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://api-generator.retool.com/ELI42D/collection_stats?collection_id=${id}`)
            .then(response => {
                const data = response.data
                setStats(data)
            })
            .catch(err => {
                console.log(err);
                throw new Error(`message: ${err}`)
            })
    }, [])

    let chartValue = stats?.map(el => +el.floor_price_eth)
    const { id } = route.params

    const displayDay = (day) => {
        console.log(day);
    }

    return (
        <>
            <View style={styles.top}>
                <ImageBackground source={{
                    uri: collectionById?.banner_image_url
                }} resizeMode="cover" style={styles.bannerImage}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.mainImage}
                            source={{
                                uri: collectionById?.image_url,
                            }}
                        />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.font}>ITEMS</Text>
                    <View style={styles.informationItem}>
                        <Text style={styles.fontBold}>2</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.font}>FLOOR</Text>
                    <View style={styles.informationItem}>
                        <Image
                            style={styles.iconUp}
                            source={require('./assets/up.png')}
                        />
                        <Text style={styles.fontBold}>{stats ? stats[0].floor_price_eth : null}</Text>
                    </View>

                </View>
                <View>
                    <Text style={styles.font}>TOTAL FLOOR</Text>
                    <View style={styles.informationItem}>
                        <Image
                            style={styles.iconUp}
                            source={require('./assets/up.png')}
                        />
                        <Text style={styles.fontBold}>{stats ? stats[0].total_volume_eth : null}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.font}>1 DAY</Text>
                    <View style={styles.informationItem}>
                        <Image
                            style={styles.iconUp}
                            source={require('./assets/down.png')}
                        />
                        <Text style={styles.fontBoldRed}>-1.5%</Text>
                    </View>
                </View>
            </View>
            <View style={styles.mid}>
                <View style={{ marginVertical: 20 }}>
                    <View style={styles.information}>
                        <Image
                            style={styles.iconBigger}
                            source={require('./assets/upBigger.png')}
                        />
                        <Text style={styles.fontBoldBigger}>{stats ? stats[0].floor_price_eth : null}</Text>
                    </View>
                    <View style={styles.information}>
                        <Image
                            style={styles.iconUpGreen}
                            source={require('./assets/upGreen.png')}
                        />
                        <Text style={styles.fontGreen}>20.2%</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.containerDay}>
                        <TouchableOpacity onPress={() => displayDay('1d')}>
                            <View style={styles.buttonDay}>
                                <Text>1d</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => displayDay('7d')} >
                            <View style={styles.buttonDay}>
                                <Text>7d</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => displayDay('30d')}>
                            <View style={styles.buttonDay}>
                                <Text>30d</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Chart chartValue={chartValue} style={{ flex: 1 }} />
            <View style={styles.bottom}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fontBigger}>Recent Activity</Text>
                    <TouchableOpacity>
                        <Image
                            style={styles.iconArrowRight}
                            source={require('./assets/arrowRight.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: '#707070',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: "90%",
                        alignSelf: "center",
                        margin: 5
                    }}
                />
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <Image
                        style={styles.bottomImage}
                        source={{
                            uri: collectionById?.image_url,
                        }}
                    />
                    <View style={styles.infoDiamond}>
                        <Image
                            style={styles.diamond}
                            source={require('./assets/diamond.png')}
                        />
                        <Text style={{ color: "white", fontWeight: "bold" }}>#3608</Text>
                    </View>
                    <Image
                        style={styles.bottomImage}
                        source={{
                            uri: collectionById?.image_url,
                        }}
                    />
                </View>
            </View>
        </>

    )
}

export default Detail

const styles = StyleSheet.create({
    infoDiamond: {
        flexDirection: 'row',
        backgroundColor: "black",
        opacity: 0.5,
        height: 24,
        width: 80,
        padding: 2,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        marginLeft: 40,
        marginTop: 90
    },
    diamond: {
        height: 14,
        width: 14
    },
    bottomImage: {
        height: 120,
        width: 120,
        margin: 10
    },
    bannerImage: {
        flex: 1,
        justifyContent: "center",
    },
    buttonDay: {
        flex: 1,
        paddingTop: 4
    },

    top: {
        flex: 4,
    },
    mainImage: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    imageContainer: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        position: 'absolute',
        // top: 0, 
        left: "36%",
        right: "36%",
        // bottom: 0, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconArrowRight: {
        marginLeft: 250,
        marginTop: 3,
        height: 12,
        width: 6,
    },
    fontBigger: {
        marginLeft: 10,
        color: "black",
        fontSize: 16
    },
    iconBigger: {
        height: 20,
        marginTop: 6,
        marginRight: 1
    },
    fontBoldBigger: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black"
    },
    iconUpGreen: {
        height: 15,
        marginTop: 2,
        marginRight: 1,
        marginLeft: 5
    },
    fontGreen: {
        marginLeft: 2,
        color: "#18E238",
        fontWeight: "bold"
    },
    information: {
        flexDirection: "row",
        textAlign: "right",
        marginLeft: 20,
    },
    font: {
        color: "#707070"
    },
    fontBold: {
        color: "black",
        fontWeight: "bold"
    },
    fontBoldRed: {
        color: "red",
        fontWeight: "bold"
    },
    mid: {
        flex: 2,
        flexDirection: "row",
        alignContent: "space-between"
    },
    bottom: {
        flex: 4
    },
    container: {
        height: "8%",
        width: "90%",
        flexDirection: "row",
        padding: 10,
        alignSelf: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    informationItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    iconUp: {
        height: 15,
        marginTop: 2,
        marginRight: 1
    },
    containerDay: {
        flexDirection: "row",
        marginLeft: 170,
        marginTop: 20,
        width: 100,
        height: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "grey"
    },
})