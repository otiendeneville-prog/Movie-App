import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { movies } from "../data";

export default function MovieIndex() {
  const router = useRouter();

  return (
    <View className="flex-1 pt-[60px] px-4 bg-blue-950">
      <Text className="text-5xl font-bold mb-4 text-yellow-400">
        Recent Movies
      </Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/movies/${item.id}`)}>
            <View className="bg-black-500 p-4 rounded-lg mb-3 shadow-sm border-2 border-emerald-400">
              <Text className="text-lg font-semibold text-white">
                {item.title}
              </Text>
              <Text className="text-sm text-emerald-100 mt-1">
                ⭐ {item.rating}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
