import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

export default function PerfilScreen() {
  const [nombre, setNombre] = useState("Juan Pérez");
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const guardarNombre = () => {
    if (nuevoNombre.trim() !== "") {
      setNombre(nuevoNombre);
      setNuevoNombre("");
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Button title="Cambiar nombre" onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              placeholder="Nuevo nombre"
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
              style={styles.input}
            />
            <Button title="Guardar" onPress={guardarNombre} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 22,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
