import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import bg from "../assets/images/bg.png";

const Home = () => {
  return (
    <View className="text-center flex-1 justify-center bg-neutral-800">
      <TouchableOpacity>
        <Text className="color-accent text-[50px] text-center justify-center font-bold p-20xl">
          Welcome To My App
        </Text>
      </TouchableOpacity>
      <ImageBackground source={bg} />
    </View>
  );
};

export default Home;
