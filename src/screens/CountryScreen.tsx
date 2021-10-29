import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useRef, useState } from 'react'
import { Text, View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigator/HomeStackNavigator';
import { countries } from '../helpers/DataContries';
import { FlatList } from 'react-native-gesture-handler';
import CardInfoCountry from '../components/CardInfoCountry';
import useCountry from '../Hooks/useCountry';
import { CountriesContext } from '../context/CountriesContext';
import { useEffect } from 'react';

interface Props extends StackScreenProps<RootStackParams, 'CountryScreen'>{};

const CountryScreen = ({route}: Props) => {
    
    const countryParams = route.params;
    const nameCountry = countryParams.name;
    const {countryState: country, isLoading} = useCountry({nameCountry});
    const [countryState, setCountryState] = useState(country)
     
    useEffect(() => {
        
        if (!isLoading) {
            setCountryState(country);
        }
        
    }, [nameCountry, isLoading]); 
    
    const generalInfo = [
        {
            infoName: 'currency',
            infoData: countryState?.country.currency.name
        },
        {
            infoName: 'Continent',
            infoData: countryState?.country.names.continent
        },
        {
            infoName: 'Codigo telefonico',
            infoData: countryState?.country.telephone.calling_code
        },
        {
            infoName: 'Police',
            infoData: countryState?.country.telephone.police
        },
        {
            infoName: 'ISO3',
            infoData: countryState?.country.names.iso3
        }
    ];

    const neighbors = countryState?.country.neighbors;

    if (isLoading) {
        return(
            <ActivityIndicator style={{
                flex: 1,
                alignSelf: 'center',
                
            }} 
            color='blue' 
            size='large' />
        )
    }

    return (
        <ScrollView>
            {/* Header title country */}
            <View style={styles.HeaderView}>
                <Text style={styles.nameCountry}>{countryState?.country.names.name} - {countryState?.country.names.iso2}</Text>
            </View>

            {/* ************Info country************ */}
            <View>
                <Text style={{ textAlign: 'center', fontSize: 28 }}>USD - {countryState?.country.currency.code}: {countryState?.country.currency.rate}</Text>
            {/* General Info */}
                <Text style={{...styles.TitleSection, ...styles.GlobalMargin}}>General information</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <FlatList
                        style={{paddingTop: 10, paddingBottom: 20}}
                        data={generalInfo}
                        renderItem={ ({ item }: any) => <CardInfoCountry data={item.infoData} subData={item.infoName} />}
                        keyExtractor={ (_, index) => index.toString() }
                        horizontal={ true }
                        showsHorizontalScrollIndicator={ false }
                    />
                </View>

            {/* Neighbors of each country */}
                <Text style={{...styles.TitleSection, ...styles.GlobalMargin}}>neighbors</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <FlatList
                        style={{paddingTop: 10, paddingBottom: 20}}
                        data={neighbors}
                        renderItem={ ({ item }: any) => <CardInfoCountry data={item.name} subData={`id: ${item.id}`} />}
                        keyExtractor={ (_, index) => index.toString() }
                        horizontal={ true }
                        showsHorizontalScrollIndicator={ false }
                    />
                </View>

                <Text style={styles.reference}>The information in this application is from the travelbriefing.org api</Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    GlobalMargin: {
        marginHorizontal: 15,
    },
    HeaderView: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 400,
        borderBottomRightRadius: 400,
        height: 100,
        width: "110%",
        backgroundColor: '#00456E'
    },
    nameCountry: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
    },
    TitleSection: {
        textAlign: 'left',
        marginVertical: 15,
        fontSize: 25
    },
    reference: {
        textAlign: 'center',
        color: '#919191',
        marginVertical: 20,
        fontSize: 13
    }
});
export default CountryScreen
