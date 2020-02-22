import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class HomeScreen extends Component{
    constructor(props){
        super(props);
    }

    _logout = async () => {
        await AsyncStorage.removeItem('token');
        this.props.navigation.navigate('Auth');
    }

    render(){
        return(
            <View style={styles.view}>
                <Text>Hola esta es la pantalla principal</Text>
                <Button title="Ir a perfil" onPress={() => this.props.navigation.navigate('Profile')}></Button>
                <Button title="Ver usuarios" onPress={() => this.props.navigation.navigate('Users')}></Button>
                <Button title="Cerrar sesión" onPress={() => this._logout()}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})