import { Tabs } from "expo-router";
import { ImageBackground } from "react-native";
import bg from "../assets/images/bg.png";
import "../globals.css";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground source={bg} />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="serch"
        options={{
          title: "Serch",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
