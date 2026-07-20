import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View className="text-center flex-1 justify-center bg-neutral-800">
      <Text className="color-accent text-[50px] text-center justify-center font-bold p-20xl">
        Welcome To My App
      </Text>
      <SafeAreaView className="-mb-2">
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
};

export default Home;
