import React, {Component} from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { environment } from '../environment/environment';


export default class UserScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            userReady: false,
        }
        this._getUser();
    }

    _getUser(){
        let id = this.props.navigation.getParam('itemId');
        fetch(`${environment.apiUrlApp}users/${id}`)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                user: responseJson,
                userReady: true,
            });
        })
    }
    
    render(){
        if(this.state.userReady){
            return(
                <View style={styles.view}>
                    <Text>Usuario: {this.state.user.username}</Text>
                    <Text>Nombre: {this.state.user.name}</Text>
                    <Text>Teléfono: {this.state.user.phone}</Text>
                    <Text>Email: {this.state.user.email}</Text>
                    <Text>Compañia: {this.state.user.company.name}</Text>
                </View>
            )
        }else{
            return(
                <ActivityIndicator/>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})