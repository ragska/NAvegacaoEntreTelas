import React, {useState} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Alert } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginPage({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        const validUser = 'rafa';
        const validPass = '1234';

        if(username === validUser && password === validPass) {
            Alert.alert('Sucesso', 'Login efetuado com sucesso!');
            navigation.navigate('Home');
        }else {
            Alert.alert('Erro', 'Usuário ou senha inválidos');
        }

    };

    return(

        <View style={styles.container}>
        
            <Text style={styles.title}>Login</Text>
            
            <TextInput 
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput 
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />


            <View style={styles.buttonContainer}>
                <Button
                    title= "Entrar"
                    onPress={handleLogin}
                />
            </View>

        </View>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6fa',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: windowWidth * 0.7,
        height: 40,
        borderColor: '#999',
        borderWidth: 1,
        dorderRaduis: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',

    },
    buttonContainer: {
        backgroundColor: '#dda0dd',
        margin: 10,
        width: windowWidth * 0.5,
        borderRadius: 5,
    },

});