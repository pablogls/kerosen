import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapComponent from "../components/MapComponent";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { LinearGradient } from "expo-linear-gradient";
import { faCalculator, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const HomeMap = () => {
  return (
    <View style={styles.container}>
      <MapComponent style={styles.map} />
      <LinearGradient
        // Fondo con gradiente lineal
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />

      <View style={styles.tittle}>
        <FontAwesomeIcon
          icon={faCalculator}
          size={35}
          style={{ ...styles.calculatorIcon, color: "white" }}
        />

        <FontAwesomeIcon
          icon={faGear}
          size={35}
          style={{ ...styles.gearIcon, color: "white" }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.aPointText}>Punto A</Text>

        <Text style={styles.bPointText}>Punto B</Text>

        <View style={styles.inputContainer}>
          <GooglePlacesAutocomplete
            placeholder="Ingrese un punto..."
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "es",
            }}
            enablePoweredByContainer={false}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>

        <View style={styles.calcular}>
          <Text style={styles.calcularText}>Calcular</Text>
        </View>

        <View style={styles.inputContainerb}>
          <GooglePlacesAutocomplete
            placeholder="Ingrese un punto..."
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "es",
            }}
            enablePoweredByContainer={false}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    top: "65%",
    width: "100%",
    height: "40%",
    borderRadius: 20,
    position: "absolute",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 0,
    alignItems: "center",
  },

  apoint: {
    width: "85%",
    height: "16%",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    top: "17%",
  },

  bpoint: {
    width: "85%",
    height: "16%",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    top: "30%",
  },

  aPointText: {
    fontSize: 16,
    top: "10%",
    left: "9%",
    position: "absolute",
  },

  bPointText: {
    fontSize: 16,
    top: "35%",
    left: "9%",
    position: "absolute",
  },

  calcular: {
    width: "50%",
    height: "15%",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    bottom: "18%",
  },

  calcularText: {
    fontSize: 16,
    color: "white",
    position: "absolute",
  },

  inputContainer: {
    width: "85%",
    height: "80%",
    top: "18%",
    flex: 0,
  },

  inputContainerb: {
    width: "85%",
    height: "16%",
    top: "42%",
    position: "absolute",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },

  calculatorIcon: {
    position: "absolute",
    top: "30%",
    left: "4%",
  },

  gearIcon: {
    position: "absolute",
    top: "30%",
    right: "4%",
  },

  tittle: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "10%",
  },
});

export default HomeMap;
