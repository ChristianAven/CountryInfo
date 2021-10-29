import React, { useEffect, useState } from 'react'
import { View, Dimensions, Text, StyleSheet, Image, ColorValue } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { getColors } from '../helpers/getColores';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props {
    countries: any[];
}

const { width: windowWidth } = Dimensions.get('window');

const HeaderCarousel = ({countries}: Props) => {

    const {top} = useSafeAreaInsets();
    const [headerColor, setHeaderColor] = useState<ColorValue>("#D5DBDB");

    const getCountryColor = async(index: number) => {
        const uri = countries[index].img;
        const [primary = 'black'] = await getColors(uri);
        setHeaderColor(primary);
    }

    useEffect(() => {
        if( countries.length > 0 ) {
            getCountryColor(0);
        }
    }, [])

    return (
        <View style={{...styles.HeaderView, backgroundColor: headerColor}}>
                <View style={styles.HeaderShadow}>
                    <Text style={{...styles.HeaderTitle, top: 10 + top, fontWeight: 'bold'}}>CountryInfo</Text>
                    <Carousel 
                        data={ countries }
                        renderItem={ ({ item }: any) => 
                            <View style={{ justifyContent: 'center', alignItems:'center'}}>
                                <Image source={item.img} style={styles.imgHeader}/>
                            </View>
                            }
                        sliderWidth={ windowWidth }
                        itemWidth={ windowWidth }
                        scrollEnabled={false}
                        loop
                        autoplay
                        autoplayDelay={0}
                        autoplayInterval={5000}
                        onSnapToItem={ index => getCountryColor( index ) }
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    HeaderView: {
        alignSelf: 'center',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        height: 350,
        width: "130%",
    },
    HeaderShadow: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(45,45,45,.3)',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,

    },
    HeaderTitle: {
        color: 'white',
        fontSize: 40,
    },
    imgHeader: {
        top: 50,
        width: 150,
        height: 150,
    }
});

export default HeaderCarousel;