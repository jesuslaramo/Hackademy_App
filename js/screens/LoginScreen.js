import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    _login = async () => {
        if(this.state.username === 'jesus' && this.state.password === 'admin'){
            await AsyncStorage.setItem('token', '123456');
            this.props.navigation.navigate('App');
        }else{
            alert('El usuario o la contraseña son incorrectos');
        }
    }

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.form}>
                    <Text style={styles.title}>Inciar sesión</Text>
                    <TextInput placeholder="Escribe tu usuario" autoCapitalize="none" onChangeText={(username) => this.setState({username})} style={styles.input}></TextInput>
                    <TextInput placeholder="Contraseña" autoCapitalize="none" secureTextEntry={true} onChangeText={(password) => this.setState({password})} style={styles.input}></TextInput>
                    <Button title="Iniciar sesión" onPress={() => this._login()}></Button>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form:{
        width: '80%',
    },
    title:{
        fontSize: 34,
        textAlign: 'center',
        marginBottom: 30,
    },
    input:{
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
    }
})