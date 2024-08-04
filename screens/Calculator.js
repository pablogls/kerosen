import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



const Calculator = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}> 
            <FontAwesomeIcon
          icon={faChevronLeft}
          size={30}
          style={{color: "black"}}
        />
            </View>
            <View style={styles.inputContainer}>
                <Text>Precio</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Precio por litro"
                    keyboardType="numeric"
                />
                <Text style={styles.text}>Km por litro</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Kilómetros por litro"
                    keyboardType="numeric"
                />
                <Text >Km a recorrer</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Kilómetros a recorrer"
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left"
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        width: "80%",
        backgroundColor: "#DDDDDF",
        borderRadius: 7,
    },
    head: {
        top: 40,
        left: 10
    },
})