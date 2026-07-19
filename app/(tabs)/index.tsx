import { Tabs } from "expo-router";

const index = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
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
};

export default index;
