import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import PageLayout from "../../components/PageLayout";
import peopleData from "../../data/people.json";
import { getSlug } from "../../helpers/URLtoRoute";
import { colors } from "../../helpers/colors";
import { BarlowFonts } from "../../helpers/fonts";

export default function PeopleIndex() {
  const router = useRouter();
  const { people } = useGlobalSearchParams();

  const personData = peopleData.results.filter((p) => getSlug(p.url) === +people!);

  if (personData.length === 0) {
    return;
  }

  return (
    <PageLayout>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView></ScrollView>
    </PageLayout>
  );
}

const styles = StyleSheet.create({});
