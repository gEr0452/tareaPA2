import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../../components/card";


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
    elevation: 4 
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
