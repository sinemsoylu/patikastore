import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({product}) => {
    //console.log(props.product);
    return(
        <SafeAreaView style={styles.container} >
            <View>
                <Image 
                    style={styles.image} 
                    source={{uri: product.imgURL}} 
                    resizeMode="contain"
                    />
                <View>
                    <Text style={styles.title} >{product.title}</Text>
                    <Text style={styles.price} >{product.price}</Text>
                    {product.inStock == false ? <Text style={styles.inStock}>STOKTA YOK</Text> : null }
                </View>
            </View>  
        </SafeAreaView>
    )
}

export default StoreCard;