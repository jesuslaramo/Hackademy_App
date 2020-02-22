import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { environment } from '../environment/environment';


export default class UsersListScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            usersReady: false,
        }
        this._getUsers();
    }

    _getUsers(){
        fetch(environment.apiUrlApp+'users')
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                users: responseJson,
                usersReady: true,
            });
        });
    }

    render(){
        if(this.state.usersReady){
            return(
                <View style={styles.view}>
                    <FlatList data={this.state.users} renderItem={
                        ({item}) => 
                        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('User', {itemId: item.id})}>
                            <Text style={styles.title}>{item.name}</Text>
                        </TouchableOpacity>
                    } keyExtractor={item => item.id}></FlatList>
                </View>
            )
        }else{
            return(
                <View style={styles.loading}>
                    <ActivityIndicator/>
                </View>
            )
        }

        
    }
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
    },
    item:{
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        paddingVertical: 14, 
        paddingHorizontal: 10,
    },
    title:{
        fontSize: 18,
    },
    loading:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})