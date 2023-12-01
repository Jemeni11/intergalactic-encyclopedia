import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { ScrollView, View, Pressable, Text, StyleSheet } from "react-native";

import PageLayout from "../../components/PageLayout";
import planetsData from "../../data/planets.json";
import { getSlug } from "../../helpers/URLtoRoute";

export default function PlanetIndex() {
  const router = useRouter();
  const { planets } = useGlobalSearchParams();
  console.log(planets);

  const planetData = planetsData.results.filter((p) => getSlug(p.url) === +planets!);

  if (planetData.length === 0) {
    return;
  }

  const planet = planetData[0];
  console.log("planet", planet);

  return (
    <PageLayout>
      <Stack.Screen
        options={{
          headerShown: false,
          title: planet.name,
        }}
      />
      <ScrollView style={styles.container}>
        <View />
        <View>
          <Text>{} Crawl</Text>
          <Text>{}</Text>
        </View>
      </ScrollView>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {},
});
