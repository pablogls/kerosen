import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapComponent from '../components/MapComponent';

const HomeMap = () => {
  
  
  return (

    <View style={styles.container}>
      <MapComponent style={styles.map} />
      <View style={styles.card}>

      <Text style={styles.aPointText}>Punto A</Text>
      <View style={styles.apoint}>
      </View>

      <Text style={styles.bPointText}>Punto B</Text>

      <View style={styles.bpoint}>
      </View>

      <View style={styles.calcular}>
      <Text style={styles.calcularText}>Calcular</Text>
      </View>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 100, 

  },

  card: {
    top: "65%",
    width: '100%', 
    height: '40%',
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 0,
    alignItems: 'center'
  },
  apoint: {
    width: '85%', 
    height: '16%', 
    borderRadius: 10, 
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: "#D9D9D9",
    top: "17%"

  },

  bpoint: {
    width: '85%', 
    height: '16%',
    borderRadius: 10, 
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: "#D9D9D9",
    top: "30%"

  },

  aPointText: {
    fontSize: 16,
    top: "10%",
    left: "9%",
    position: 'absolute' 
  },

  bPointText: {
    fontSize: 16,
    top: "39%",
    left: "9%",
    position: 'absolute' 
  },

  calcular: {
    width: '50%', 
    height: '15%',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
    top: "35%"

  },
  calcularText: {
    fontSize: 16,
    color: 'white',
    position: 'absolute' 
  },
  
  
});

export default HomeMap;