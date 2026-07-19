import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />

      <Tabs.Screen name="home" options={{ title: "Profile" }} />

      <Tabs.Screen name="save" options={{ title: "Save" }} />

      <Tabs.Screen name="serch" options={{ title: "Search" }} />
    </Tabs>
  );
}
