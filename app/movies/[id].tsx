import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { movies } from "../../data";

export default function MovieIndex() {
  const { id } = useLocalSearchParams();
  const movie = movies.find((m) => m.id == id);
  if (!movie) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Movie not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{movie?.title}</Text>
      <Text style={styles.text}>⭐ {movie?.rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
