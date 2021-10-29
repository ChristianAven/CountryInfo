import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    data: string,
    subData: string,
}

const CardInfoCountry = ({data, subData}:Props) => {
    return (
        <View style={{paddingTop: 10, paddingBottom: 18}}>
            <View style={styles.cardInfo}>
                <View style={{ height: 100, justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{...styles.Principal, fontSize: 35}}>{data}</Text>
                </View>
                <Text style={styles.Secondary}>{subData}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardInfo: {
        backgroundColor: 'white',
        width: 180,
        height: 150,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 8,
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    Secondary: {
        position: 'relative',
        textAlign: 'center',
        fontSize: 20
    },
    Principal: {
        fontSize: 60,
        textAlign: 'center',
        marginTop: -15
    }
});
export default CardInfoCountry