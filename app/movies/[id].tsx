import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { movies } from "../../data";

export default function MovieIndex() {
  const { id } = useLocalSearchParams();
  const movie = movies.find((m) => m.id == id);
  if (!movie) {
    return (
      <View b-light-100 justify-center>
        <Text className="text-7xl font-bold text-primary justify-center text-center">
          Movie not Found
        </Text>
      </View>
    );
  }

  return (
    <View className="text-7xl font-bold color-primary justify-center text-center">
      <Text>{movie.title}</Text>
      <Text>⭐ {movie.rating}</Text>
    </View>
  );
}
