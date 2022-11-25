import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        margin:10,
        flexDirection: 'row',
        flex: 1,
        borderRadius: 10
    },
    childContainer: {
        
    },
    image: {
        height: Dimensions.get('window').height / 4,
        marginBottom: 10,
        borderRadius: 10,
        marginTop: 10,
        
    },
    title: {
        fontSize: 20,
        fontWeight:'bold',
        color: 'black',
        marginBottom: 5,
    },
    price: {
        fontSize: 18,
        fontWeight:'bold',
        color: 'gray'
    },
    inStock: {
        fontSize: 18,
        fontWeight:'bold',
        color: 'red'
    },
});