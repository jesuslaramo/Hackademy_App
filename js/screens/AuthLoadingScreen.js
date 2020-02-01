import React, {Component} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default class AuthLoadingScreen extends Component{

    componentDidMount(){
        setTimeout( () => this.isLoggedIn(), 2000);
    }

    isLoggedIn = async () => {
        const token = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(token ? 'App' : 'Auth'); 
    }

    render(){
        return(
            <View style={styles.view}>
                <ActivityIndicator/>
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