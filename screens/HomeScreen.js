import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

const products = [
    { id: 1, name: 'Paraiso', price: 100, image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' },
    { id: 2, name: 'Lentes', price: 200, image: 'https://wpengine.com/wp-content/uploads/2021/05/optimize-images-1024x681.jpg' },
    { id: 3, name: 'Minita', price: 300, image: 'https://i.pinimg.com/236x/47/c2/0f/47c20f1a4c43038c85eca13ef355032d.jpg' },
]

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>${item.price}</Text>

                        <Button
                            title="View Details"
                            onPress={() => navigation.navigate('ProductDetails', { product: item })}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        marginBottom: 10,
        allignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.2,
    },
    image: {
        width: width * 0.88,
        height: width * 0.5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 2,
        },
        shadowOpacity: 0.2,
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        textAlign: 'center',
    },
});


export default HomeScreen;