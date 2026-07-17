import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const movies = [
  { id: "1", title: "Inception", rating: 8.8 },
  { id: "2", title: "The Matrix", rating: 8.7 },
  { id: "3", title: "Interstellar", rating: 8.6 },
  { id: "4", title: "Parasite", rating: 8.5 },
  { id: "5", title: "Game Of Thrones", rating: 9.2 },
  { id: "6", title: "God Father", rating: 8.8 },
  { id: "7", title: "Wanted", rating: 6.3 },
];

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recent Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/movies/${item.id}`)}>
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 16 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: { fontSize: 18, fontWeight: "600" },
  rating: { fontSize: 14, color: "#666", marginTop: 4 },
});
