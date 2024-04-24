import { View, Text, Image, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from './styles';

export const Login = ({navigation}) => {
    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
            <View style={styles.Container}>
                <View style={styles.UserImage} >
                    <Image source={require('../../../assets/paw-pet-login.png')}
                    style={styles.Image}  />
                </View>
                <View style={styles.form} >
                    <TextInput style={styles.inputEmail} placeholder='Email'
                    autoCompleteType= 'email' autoCapitalize='none'
                    placeholderTextColor='#000' />
                    <TextInput style={styles.inputPassword} placeholder='Senha'
                    autoCompleteType='password' autoCapitalize='none' autoCorrect={true}
                    placeholderTextColor='#000' />
                    <TouchableOpacity
                      style={styles.buttonForm}
                      onPress={() => navigation.navigate('feed')}
                    >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('createuser')} >
                        <Text style={styles.ButtonCreate} >Ainda não possui uma conta?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}