import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="contador" options={{ title: "Contador" }} />
      <Tabs.Screen name="tarjetas" options={{ title: "Tarjetas" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
    </Tabs>
  );
}

