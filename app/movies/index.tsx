import {Text, View } from "react-native"
import { Link } from "expo-router";

export default function Index(){
    return(
        <View>
            <Text>Welcome</Text>
            <Link href="/onboarding">Onboarding</Link>
            <Link href="/movies/avengers">Avengers Movies</Link>
            <Link href="/movies/horror">Horror Movies</Link>
            <Link href="/movies/martial arts">Martial Arts Movies</Link>
        </View>
    );
}   