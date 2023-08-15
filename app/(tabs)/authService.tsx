// authService.ts
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";
import firebaseApp from "../config/firebase"; // Ajusta la ruta si es necesario

export const authService = {
  register: async (email: string, password: string) => {
    try {
      const auth = getAuth(firebaseApp);
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Usuario registrado exitosamente.");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  },
  login: async (email: string, password: string) => {
    try {
      const auth = getAuth(firebaseApp);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Inicio de sesión exitoso.");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  },
  listenToAuthChanges: (callback: (user: User | null) => void) => {
    const auth = getAuth(firebaseApp);
    return onAuthStateChanged(auth, callback);
  },
};
