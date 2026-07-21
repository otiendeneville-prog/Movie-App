import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View className="text-center flex-1 justify-center bg-neutral-800">
      <TouchableOpacity>
        <Text className="color-accent text-[50px] text-center justify-center font-bold p-20xl">
          Welcome To My App
        </Text>
      </TouchableOpacity>

      <SafeAreaView className="-mb-2"></SafeAreaView>
    </View>
  );
};

export default Home;
