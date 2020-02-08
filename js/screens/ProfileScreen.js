import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { environment } from '../environment/environment';


export default class ProfileScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
        }
        this._getProfile();
    }

    _getProfile(){
        fetch(`${environment.apiUrl}api/users/1`)
        .then(response => response.json())
        .then(responseJson => {
            this.setState({user: responseJson.data});
        });
    }

    render(){
        return(
            <View style={styles.view}>
                <Image source={{uri: this.state.user.avatar}} style={styles.avatar}></Image>
                <Text style={styles.name}>{this.state.user.first_name} {this.state.user.last_name}</Text>
                <Text style={styles.email}>{this.state.user.email}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        borderRadius: 150,
    },
    name:{
        fontSize: 24,
        fontWeight: '700',
    },
    email: {
        color: '#ff3ac2'
    }
})