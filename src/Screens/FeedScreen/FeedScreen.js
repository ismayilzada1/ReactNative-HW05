import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Header from "./components/header"
import SearchBox from "../Components/SearchBox"
import MessagesContainer from "./components/MessagesContainer"

export default function App() {
    return (
        <View style={styles.container}>

            <View style={styles.flex1Container}>
                <Header/>
            </View>

            <View style={styles.SearchContainer}>
                <SearchBox/>
            </View>

            <View style={styles.MessagesContainer}>
                <MessagesContainer/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    flex1Container:{
        flex:1
    },
    SearchContainer:{
        flex:1,
        alignItems:"center"
    },
    MessagesContainer:{
        flex:8,
    }

});
