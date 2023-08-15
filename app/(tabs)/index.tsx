import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { authService } from "./authService"; // Ajusta la ruta si es necesario

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    authService.listenToAuthChanges((user) => {
      if (user) {
        console.log("Usuario autenticado:", user);
      } else {
        console.log("Ningún usuario autenticado.");
      }
    });
  }, []);

  const handleRegister = async () => {
    await authService.register(email, password);
  };

  const handleLogin = async () => {
    await authService.login(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" onPress={handleRegister} />
        <Button title="Iniciar sesión" onPress={handleLogin} />
      </View>
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
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
  },
});
