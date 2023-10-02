import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../../assets/images/logo.png'
import logoText from '../../assets/images/logo-text.png'
import { Button } from 'react-native-elements'


const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{
        flex: 1, 
        backgroundColor: '#fff'
    }}>
        <View style={{
            alignItems:'center', 
            flex: 4, 
            justifyContent:'center'
        }}>
            <Image
                style={{...styles.logo, marginBottom: 16}}
                source={logo}
            />
            <Image
                style={styles.logo}
                source={logoText}
            />
        </View>
        <View style={{
            flex: 2,
            marginHorizontal: 20
        }}>
            <View>
                <Button
                    title='Đăng nhập'
                    buttonStyle={styles.buttonLogin}
                    titleStyle={styles.buttonLoginTitle}
                    onPress={
                        ()=>navigation.navigate('Login')
                    }
                />
                <Text style={{
                    marginVertical: 16,
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#0749A4'
                }}>Hoặc</Text>
                <Button
                    title='Đăng kí'
                    buttonStyle={styles.buttonRegister}
                    titleStyle={styles.buttonRegisterTitle}
                    onPress={
                        ()=>navigation.navigate('Register')
                    }
                />
            </View>
        </View>
       
    </SafeAreaView>
    
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    logo: {
        width: '60%',
        resizeMode: 'contain',
        height: 100
    },
    buttonLogin: {
        backgroundColor:'#3191E1',
        height: 50,
        borderRadius: 30,
        fontSize: 32,
        fontWeight: 'bold'
    },
    buttonRegister: {
        backgroundColor:'#fff',
        height: 50,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#3191E1'
    },
    buttonLoginTitle: {

    },
    buttonRegisterTitle: {
        color: '#3191E1'
    }
})