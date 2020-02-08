import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { environment } from '../environment/environment';



export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    _signInAsync = async (token) => {
        await AsyncStorage.setItem('token', token);
        this.props.navigation.navigate('App');
    }

    _login(){
        if(this.state.email != '' && this.state.password != ''){
            fetch(`${environment.apiUrl}api/login`,{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            }).then(response => response.json())
            .then(responseJson => {
                if(responseJson.hasOwnProperty('error')){
                    alert("El usuario o la contraseña son incorrectos");
                }else{
                    this._signInAsync(responseJson.token);
                }
            });
        }else{
            alert('Debes llenar los campos de usuario y contraseña');
        }
    }

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.form}>
                    <Text style={styles.title}>Inciar sesión</Text>
                    <TextInput placeholder="Escribe tu email" autoCapitalize="none" onChangeText={(email) => this.setState({email})} style={styles.input} keyboardType="email-address"></TextInput>
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
