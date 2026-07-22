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
              <ImageBackground
                source={bg}
                className="flex flex-row w-full flex-1 min-w[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
              />
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
