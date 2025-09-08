import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Incrementar" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.button}>
          <Button title="Decrementar" onPress={() => setCount(count - 1)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  text: { fontSize: 22, marginBottom: 20 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
  button: { marginHorizontal: 10 },
});
