import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import firebase from 'firebase';
import config from '../../config.json'
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            var firebaseConfig = config.firebaseConfiguration;
            firebase.initializeApp(firebaseConfig);
        }
    }

    onChangeHandler(field, valor) {
        this.setState({
            [field]: valor
        })
    }

    processLogin() {
        this.setState({ isLoading: true });

        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                this.setState({ message: "" });
                this.props.navigation.navigate('Noticias');
            })
            .catch(error => {
                this.setState({ message: this.getMessageByError(error.code) });
            })
            .then(() => {
                this.setState({ isLoading: false });
            })
    }

    processRegister() {
        this.setState({ isLoading: true });

        const { email, password } = this.state;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                this.setState({ message: "" });
                this.props.navigation.navigate('Noticias');
            })
            .catch(error => {
                console.log(error.code);
                this.setState({ message: this.getMessageByError(error.code) });
            })
            .then(() => {
                this.setState({ isLoading: false });
            })
    }

    getMessageByError(code) {
        console.log(code);
        switch (code) {
            case "auth/invalid-email":
                return "E-mail inexistente";
            case "auth/email-already-in-use":
                return "E-mail ja está sendo utilizado";
            case "auth/wrong-password":
                return "Senha incorreta";
            case "auth/weak-password":
                return "Senha fraca minimo 6 caracteres";
            default:
                return "Erro desconhecido";
        }
    }

    renderLoginButton() {
        if (this.state.isLoading)
            return <ActivityIndicator size="small" color="#0000ff" />
        return (
            <Button style={styles.ButtonLogin}
                title="Login"
                onPress={() => this.processLogin()}
            />
        )
    }

    renderRegisterButton() {
        if (this.state.isLoading)
            return <ActivityIndicator size="small" color="#0000ff" />
        return (
            <View style={styles.ButtonLogin}>
                <Button
                    title="Registrar"
                    color="#204875"
                    onPress={() => this.processRegister()}
                />
            </View>
        )
    }

    renderMessage() {
        const { message } = this.state;

        if (!message)
            return null;

        return (
            <View style={styles.Message}>
                <Text >
                    {message}
                </Text>
            </View>
        )
    }

    render() {
        return (

            <View style={styles.container}>
                {this.renderMessage()}
                <FormRow>
                    <TextInput
                        placeholder="Login"
                        placeholderTextColor="#ffffff"
                        value={this.state.email}
                        onChangeText={valor => {
                            this.onChangeHandler('email', valor)
                        }}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        placeholder="Senha"
                        secureTextEntry
                        placeholderTextColor="#ffffff"
                        value={this.state.password}
                        onChangeText={valor => {
                            this.onChangeHandler('password', valor)
                        }}
                    />
                </FormRow>

                {this.renderLoginButton()}
                {this.renderRegisterButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
    },
    ButtonLogin: {
        margin: 5,
    },
    Message: {
        justifyContent: 'flex-start',
        backgroundColor: "#8f2c3e",
    }
});