import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import useCountry from '../Hooks/useCountry';
import { Countries } from '../interfaces/countriesInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    item: Countries
}

const ItemListCountry = ({item}: Props) => {

    const navigation = useNavigation();
    console.log(item);
    

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("CountryScreen", item)}
        >
            <View style={{height: 50, justifyContent: 'space-between', flexDirection: 'row', alignItems:'center'}}>
                <Text style={{fontSize: 20, left: 5}}>{item.name}</Text>
                <Icon name='chevron-forward-outline' color='grey' size={20} />
            </View>
        </TouchableOpacity>
    )
}
export default ItemListCountry