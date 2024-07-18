import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "@env";

const MapComponent = ({ locationA, locationB, setLocationA, setLocationB, setDistance, setDuration }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso denegado');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  useEffect(() => {
    if (locationA || locationB) {
      setLocation(prevLocation => ({
        ...prevLocation,
        latitude: locationA ? locationA.lat : locationB.lat,
        longitude: locationA ? locationA.lng : locationB.lng,
      }));
    }
  }, [locationA, locationB]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="mutedStandard"
        region={location}
        showsUserLocation={true}
      userLocationAnnotationTitle="Tu ubicación"
      >
        {locationA && (
          <Marker
            coordinate={{
              latitude: locationA.lat,
              longitude: locationA.lng,
            }}
            title="Ubicación A"
            draggable
            onDragEnd={(e) => setLocationA({
              lat: e.nativeEvent.coordinate.latitude,
              lng: e.nativeEvent.coordinate.longitude,
            })}
          />
        )}
        {locationB && (
          <Marker
            coordinate={{
              latitude: locationB.lat,
              longitude: locationB.lng,
            }}
            title="Ubicación B"
            draggable
            onDragEnd={(e) => setLocationB({
              lat: e.nativeEvent.coordinate.latitude,
              lng: e.nativeEvent.coordinate.longitude,
            })}
          />
        )}
        {locationA && locationB && (
          <MapViewDirections
            origin={{latitude: locationA.lat, longitude: locationA.lng}}
            destination={{latitude: locationB.lat, longitude: locationB.lng}}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="black"
            onReady={result => {
              setDuration(result.duration);
              setDistance(result.distance);
              console.log(`Duration: ${result.duration} minutes`);
              console.log(`Distance: ${result.distance} km`);
            }}
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "70%",
  },
});

export default MapComponent;
