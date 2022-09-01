
import MainContainer from '../../shared/components/MainContainer'
// import { TouchableOpacity, Text, StyleSheet, ImageBackground, View } from 'react-native'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from "react-native"


const WelcomePage = () => {
    return (
        <MainContainer>
            <ImageBackground
                source={require('../../../assets/img/background.jpg')}
                rezieMode='cover'
                style={styles.background}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>POS System</Text>
                    <Text style={styles.subtitle}>Simple Point Of Sales</Text>

                </View>

                <TouchableOpacity style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>

            </ImageBackground>

        </MainContainer>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        alignItems: 'center'
    },
    background: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    titleContainer: {
        alignItems: "center"
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle: {
        fontSize: 16,
        color: 'black'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'stretch',
        margin: 16
    }
});


export default WelcomePage