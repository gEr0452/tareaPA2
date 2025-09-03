import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  const data = ["Tarjeta 1", "Tarjeta 2", "Tarjeta 3", "Tarjeta 4"];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        {data.map((texto, index) => (
          <Card key={index} text={texto} />
        ))}
      </ScrollView>
    </View>
  );
}

type CardProps = {
  text: string;
};

function Card({ text }: CardProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={() => setPressed(!pressed)}
      style={[
        styles.card,
        { backgroundColor: pressed ? "#4CAF50" : "#f0f0f0" }
      ]}
    >
      <Text style={[styles.cardText, { color: pressed ? "#fff" : "#000" }]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list: {
    alignItems: "center",
    paddingVertical: 20
  },
  card: {
    width: 200,
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4 // sombra en Android
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
