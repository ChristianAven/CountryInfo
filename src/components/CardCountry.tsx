import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface Props {
    Country: any
}

const CardCountry = ({Country}: Props) => {
        
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback
            onPress={ () => navigation.navigate("CountryScreen", Country) }
            style={{height: 260}}
        >
            <View style={{...styles.countryCard, ...styles.GloblaMargin}}>
                <Image source={Country.img} style={styles.imgCard}/>
                <View style={{...styles.GloblaMargin, ...styles.InfoCard}}>
                    <Text style={styles.titleCard}>{Country.name}</Text>                    
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    countryCard: {
        backgroundColor: 'white',
        width: 200,
        height: 150,
        marginTop: 50,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
    imgCard: {
        position: 'relative',
        top: -50,
        left: 50,
        width: 100,
        height: 100,
    },
    titleCard: {
        fontSize: 22
    },
    InfoCard: {
        position: 'relative',
        top: '-20%',
        alignItems: 'center'
    },
    GloblaMargin: {
        marginHorizontal: 15,
    },
});

export default CardCountry