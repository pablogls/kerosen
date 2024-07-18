import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Modal, TextInput, Button } from "react-native";
import MapComponent from "../components/MapComponent";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { LinearGradient } from "expo-linear-gradient";
import { faCalculator, faCrosshairs, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const HomeMap = () => {
  const [locationA, setLocationA] = useState(null);
  const [locationB, setLocationB] = useState(null);
  const [literPrice, setLiterPrice] = useState(null);
  const [literAvrg, setLiterAvrg] = useState(null);
  const [literModal, setLiterModal] = useState(true);
  const [calculateModal, setCalculateModal] = useState(false);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const handleCalculate = () => {
    if (literPrice === null || literAvrg === null) {
      setLiterModal(true);
    } else {
      setCalculateModal(true);
    }
  };

  const calculateCost = () => {
    if (distance && literAvrg && literPrice) {
      return ((distance / literAvrg) * literPrice).toFixed(2);
    }
    return "Error";
  };

  const handleSaveValues = () => {
    setLiterModal(false);
  };

  const handleSelectlocationA = (data, details) => {
    const { lat, lng } = details.geometry.location;
    setLocationA({ lat, lng });
  };

  const handleSelectlocationB = (data, details) => {
    const { lat, lng } = details.geometry.location;
    setLocationB({ lat, lng });
  };

  return (
    <View style={styles.container}>
      <MapComponent
        locationA={locationA}
        locationB={locationB}
        setLocationA={setLocationA}
        setLocationB={setLocationB}
        setDistance={setDistance}
        setDuration={setDuration}
      />

      <LinearGradient
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

      {/* <View style={styles.currentLocation}>

      <FontAwesomeIcon
          icon={faCrosshairs}
          size={35}
          style={{ color: "#7E7E7E" }}
        />




      </View> */}

      <View style={styles.card}>
        <Text style={styles.aPointText}>Punto A</Text>

        <Text style={styles.bPointText}>Punto B</Text>

        <View style={styles.calcular} onTouchEnd={handleCalculate}>
          <Text style={styles.calcularText}>Calcular</Text>
        </View>

        <View style={styles.inputContainerb}>
          <GooglePlacesAutocomplete
            placeholder="Ingrese un punto..."
            styles={searchBox}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "es",
            }}
            enablePoweredByContainer={false}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            onPress={handleSelectlocationB}
            fetchDetails={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <GooglePlacesAutocomplete
            placeholder="Ingrese un punto..."
            styles={searchBox}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "es",
            }}
            enablePoweredByContainer={false}
            minLength={2}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            onPress={handleSelectlocationA}
            fetchDetails={true}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={literModal}
        onRequestClose={() => {
          setLiterModal(false);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Ingrese los valores</Text>
          <TextInput
            style={styles.input}
            placeholder="Precio por litro"
            keyboardType="numeric"
            value={literPrice}
            onChangeText={setLiterPrice}
          />
          <TextInput
            style={styles.input}
            placeholder="Promedio de litros"
            keyboardType="numeric"
            value={literAvrg}
            onChangeText={setLiterAvrg}
          />
          <Button
            style={styles.guardar}
            title="Guardar"
            onPress={handleSaveValues}
          />
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={calculateModal}
        onRequestClose={() => {
          setCalculateModal(false);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            El cálculo de costo es: {calculateCost()}
          </Text>
          <Button
            style={styles.guardar}
            title="Cerrar"
            onPress={() => setCalculateModal(false)}
          />
        </View>
      </Modal>
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

  aPointText: {
    fontSize: 16,
    top: 45,
    left: "9%",
    position: "absolute",
  },

  bPointText: {
    fontSize: 16,
    top: 125,
    left: "9%",
    position: "absolute",
  },

  calcular: {
    width: 200,
    height: 60,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    top: 220,
  },

  calcularText: {
    fontSize: 16,
    color: "white",
    position: "absolute",
  },

  inputContainer: {
    width: 350,
    height: 200,
    top: 10,
    flex: 0,
  },

  inputContainerb: {
    width: 350,
    height: 120,
    top: 150,
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

  currentLocation: {
    backgroundColor: "#FFFFFF",
    height: 60,
    width: 60,
    bottom: 320,
    left: 300,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    top: 70,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  guardar: {
    backgroundColor: "black",
  },
});

const searchBox = StyleSheet.create({
  container: {
    flex: 0,
  },

  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 10,
    fontSize: 18,
  },

  textInputContainer: {
    paddingHorizontal: 0,
  },
});

export default HomeMap;