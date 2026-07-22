import { Tabs } from "expo-router";
import { ImageBackground } from "react-native";
import bg from "../assets/images/bg.png";
import "../globals.css";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: 50,
          marginHorizontal: 56,
          marginBottom: 36, // Fixed: changed 'marginHeight' to 'marginBottom'
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderTopWidth: 0, // Clears the default React Navigation top border
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <ImageBackground
              source={bg}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden" // Fixed typo: min-w-[112px]
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <ImageBackground
              source={bg}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          tabBarIcon: ({ focused }) => (
            <ImageBackground
              source={bg}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="serch" // Note: You might want to rename this to "search" later
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <ImageBackground
              source={bg}
              className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
            />
          ),
        }}
      />
    </Tabs>
  );
}
