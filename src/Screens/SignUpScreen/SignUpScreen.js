import { Pressable, Text, TextInput, View,CheckBox,TouchableOpacity } from "react-native";
import styles from './styles';
import React, { useState } from 'react';


const SignUpScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Pressable style={styles.closeButtonContainer}><Text style={styles.closeButton}>+</Text></Pressable>
                <Text style={styles.title}>Sign Up</Text>
                <Pressable style={styles.loginButtonContainer}><Text style={styles.loginButton}>Login</Text></Pressable>
            </View>

            <View style={styles.form}>

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#BDBDBD"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#BDBDBD"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="#BDBDBD"
                    secureTextEntry={true}

                />

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={setIsChecked}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>I would like to receive your newsletter and other promotional information.</Text>
                </View>

            </View>


            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.forgotPassword} >Forgot your password?</Text>
            </View>


        </View>
    );
};

export default SignUpScreen;
