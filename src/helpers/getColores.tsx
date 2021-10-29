import ImageColors from 'react-native-image-colors';



export const getColors = async( uri: string ) => {
    
    
    const colors = await ImageColors.getColors(uri, {});

    let primary;
    
    // Access android properties
    if (colors.platform === "android") {
        primary = colors.dominant;
    }

    // Access iOS properties
    if (colors.platform === "ios") {
        primary = colors.detail;
    }

    return [primary];

}