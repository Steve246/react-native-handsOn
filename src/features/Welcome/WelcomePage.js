
import MainContainer from '../../shared/components/MainContainer'
// import { TouchableOpacity, Text, StyleSheet, ImageBackground, View } from 'react-native'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import LottieView from 'lottie-react-native';
import TitleLabel from "../../shared/components/TitleLabel";
import FormButton from "../../shared/components/FormButton";
import AppBackground from "../../shared/components/AppBackground";



const WelcomePage = () => {
    return (
        <MainContainer>
            <AppBackground style={{
                justifyContent: "space-evenly",
                alignItems: 'center'
            }}>
                <LottieView
                    autoPlay
                    style={styles.image}
                    source={require('../../../assets/img/117716-fusion.json')}
                />

                <View style={styles.titleContainer}>
                    <TitleLabel text='POS System' />
                    <TitleLabel subTitle text='Simple Point Of Sales' />

                </View>
                
                

                <FormButton label='Sign In' onClick={() => {
                }}></FormButton>

            </AppBackground>

        </MainContainer>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: "center",
    },
});

export default WelcomePage