import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import 'moment/locale/es';


export default class RegisterScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            photo: null,
            date: this._getTodayDate(),
        }
    }

    _handleChoosePhoto(){
        const options = {
            title: 'Seleccionar imagen',
            takePhotoButtonTitle: 'Tomar foto',
            chooseFromLibraryButtonTitle: 'Seleccionar desde galería',
            cancelButtonTitle: 'Cancelar',
            storageOptions:{
                skipBackup: true,
            },
            noData: false,
            cameraType: 'front',
        };

        ImagePicker.showImagePicker(options, (response)=> {
            if(response.uri){
                const sourceImage = { uri: 'data:image/jpeg;base64,'+response.data}
                this.setState({photo: sourceImage});
            }
        });
    }

    _isUpdatedPhoto(){  
        if(this.state.photo == null){
            return(
                <View style={styles.no_photo}>
                    <Text style={styles.no_photo_text}>Ingresar foto de perfil</Text>
                </View>
            )
        }else{
            return( <Image source={this.state.photo} style={styles.profileImage}/>)
        }
    }

    _getTodayDate(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth()+1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = yyyy+'/'+mm+'/'+dd;
        return today;
    }


    render(){
        return(
            <View style={styles.view}>
                <TouchableOpacity activeOpacity={1} onPress={() => this._handleChoosePhoto()} style={styles.selectImage}>
                    {this._isUpdatedPhoto()}
                    <Image source={require('../../assets/img/camera.png')} style={styles.camera}></Image>
                </TouchableOpacity>
                <Text>Hola esta es la pantalla de registro de usuario</Text>
                <Text>Aqui haremos la pantalla de un formulario para el registro de usuario</Text>
                <Text>Selecciona tu fecha de nacimiento</Text>
                <DatePicker date={this.state.date} mode="date" placeholder="Seleccionar una fecha" format='YYYY-MM-DD' confirmBtnText='Confirmar' cancelBtnText='Cancelar' onDateChange={(date)=>this.setState({date})} locale='es' style={styles.datepicker}></DatePicker>
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
    datepicker:{
        width: '100%',
        marginTop: 10,
    },
    photo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    no_photo: {
        backgroundColor: '#00263a',
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
    },
    no_photo_text: {
        color: '#ffffff',
    },
    camera: {
        height: 40,
        width: 40,
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderRadius: 40,
    },
    profileImage: {
        height: 150,
        width: 150,
        borderRadius: 150,
    },
})