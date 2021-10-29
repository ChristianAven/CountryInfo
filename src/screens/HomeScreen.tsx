import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BeenCountries, countries, LikeToBe } from '../helpers/DataContries';
import HeaderCarousel from '../components/HeaderCarousel';
import CardCountry from '../components/CardCountry';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {  
    
    return (
        <ScrollView>

            {/* Title and carousel of header */}
            <HeaderCarousel countries={countries}/>
            {/* countries where I've been */}
            <View>
                <Text style={{...styles.Title, ...styles.GloblaMargin, color: 'black', marginVertical: 15}}>I've been in ...</Text>
                <FlatList
                    style={{height: 240}}
                    data={ BeenCountries }
                    renderItem={ ({ item }: any) => <CardCountry Country={item}/>}
                    keyExtractor={ (_, index) => index.toString() }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                />
            </View>

            {/* I would like to be in ... */}
            <View>
                <Text style={{...styles.Title, ...styles.GloblaMargin, color: 'black', marginVertical: 15}}>I would like to be in ...</Text>
                <FlatList
                    style={{height: 240}}
                    data={ LikeToBe }
                    renderItem={ ({ item }: any) => <CardCountry Country={item}/>}
                    keyExtractor={ (_, index) => index.toString() }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    GloblaMargin: {
        marginHorizontal: 15,
    },
    Title: {
        fontSize: 30,
    },
    
   
    
});
export default HomeScreen