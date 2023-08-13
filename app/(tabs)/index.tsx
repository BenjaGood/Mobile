import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import firebaseApp from "../config/firebase"; // Ajusta la ruta si es necesario

export default function App() {
  useEffect(() => {
    const auth = getAuth(firebaseApp);

    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        console.log("Usuario autenticado:", user);
      } else {
        console.log("Ningún usuario autenticado.");
      }
    });

    // Limpieza cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conexión exitosa!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
