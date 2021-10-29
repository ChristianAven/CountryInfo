import React, {useContext, useState} from 'react';
import { View, StyleSheet, Dimensions, Platform, TextInput, Image, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Countries } from '../interfaces/countriesInterface';
import { useEffect } from 'react';
import ItemListCountry from '../components/itemListCountries';
import { CountriesContext } from '../context/CountriesContext';
import Icon from 'react-native-vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {

    const {top} = useSafeAreaInsets();

    const [textValue, setTextValue] = useState('');
    
    const {countries} = useContext(CountriesContext);
    const listCountries = countries;
    const [filterCountries, setfilterCountries] = useState<Countries[]>([])    
    
    useEffect(() => {
        
        if(textValue.length === 0) return setfilterCountries([]);

        setfilterCountries(
            listCountries.filter((country) => (country.name.toLowerCase().includes(textValue.toLowerCase())))
        );
 
    }, [textValue])    

    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20
        }}>
            <View style={{
                ...styles.inputContainer,
                top: (Platform.OS === 'ios') ? top : top + 25,
            }}>
                <View style={styles.input}>
                    <TextInput
                        placeholder='Search Country'
                        style={styles.textInput}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={textValue}
                        onChangeText={setTextValue}
                    />
                    <Icon name='search-outline' style={{position: 'absolute', right: 10, zIndex: 98}} color='grey' size={30} />
                </View>
            </View>

            {
                textValue
                ?(
                    <View style={{flex: 1, marginTop: 90}}>
                        <FlatList
                            data={filterCountries}
                            keyExtractor={(item) => item.url}
                            renderItem={({item}) => <ItemListCountry item={item} />}
                            ItemSeparatorComponent={() => <View style={{borderBottomColor: 'gray', borderBottomWidth: .8}} />}
                        />
                    </View>
                )
                : <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image 
                        source={require('../assets/planeta.png')}
                        style={{height: 125, width: 125}}
                    />
                </View> 
            }
            

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'absolute',
        zIndex: 999,
        width: screenWidth - 40,
        alignSelf: 'center'
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2,
        paddingHorizontal: 20,
        zIndex: 99
    },
    input: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    }
});
export default SearchScreen
