import { Tabs } from "expo-router";
import "./globals.css";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="home" options={{ title: "Explore" }} />
      <Tabs.Screen name="serch" options={{ title: "Serch" }} />
    </Tabs>
  );
}
