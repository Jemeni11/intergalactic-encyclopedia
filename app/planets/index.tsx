import { Stack, useRouter } from "expo-router";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";

import PageLayout from "../../components/PageLayout";
import planetsData from "../../data/planets.json";
import { BarlowFonts } from "../../helpers/fonts";
import Planet from "../../types/planet";
import { colors } from "../../helpers/colors";
import URLtoRoute from "../../helpers/URLtoRoute";

export default function Planets() {
  const router = useRouter();

  const planets: Planet[] = planetsData.results;
  const peopleSorted = [...planets].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <PageLayout>
      <Stack.Screen
        options={{
          title: "Planets",
          headerTransparent: false,
        }}
      />
      <View>
        <FlatList
          data={peopleSorted}
          numColumns={1}
          horizontal={false}
          keyExtractor={(item) => `${item.url} + 1`}
          renderItem={({ item }) => {
            const path = URLtoRoute(item.url);
            return (
              <Pressable onPress={() => router.push(path)}>
                <View>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: colors.darkPrimary,
    fontFamily: BarlowFonts.Barlow_400Regular,
  },
});
