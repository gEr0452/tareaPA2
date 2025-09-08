import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type CardProps = {
  text: string;
};

export default function Card({ text }: CardProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={() => setPressed(!pressed)}
      style={[
        styles.card,
        { backgroundColor: pressed ? "#4CAF50" : "#f0f0f0" },
      ]}
    >
      <Text style={[styles.cardText, { color: pressed ? "#fff" : "#000" }]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
  },
});
