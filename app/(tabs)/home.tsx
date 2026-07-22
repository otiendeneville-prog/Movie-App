import { ImageBackground, Text, TouchableOpacity } from "react-native";
import bg from "../assets/images/bg.png";

const Home = () => {
  return (
    <ImageBackground
      source={bg}
      resizeMode="cover"
      className="text-center flex-1 items-center justify-center "
    >
      <TouchableOpacity>
        <Text className="color-accent text-[50px] text-center justify-center font-bold p-20xl">
          Welcome To My App
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Home;
