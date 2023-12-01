import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

import PageLayout from "../../components/PageLayout";
// import Person from "../../types/person";
import peopleData from "../../data/people.json";
import URLtoRoute from "../../helpers/URLtoRoute";
import { colors } from "../../helpers/colors";
import { BarlowFonts } from "../../helpers/fonts";

export default function PeopleIndex() {
  const router = useRouter();

  const people = peopleData.results;
  const peopleSorted = [...people].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <PageLayout>
      <Stack.Screen
        options={{
          title: "People",
          headerTransparent: false,
        }}
      />
      <View>
        <FlatList
          data={peopleSorted}
          numColumns={1}
          horizontal={false}
          renderItem={({ item }) => {
            const path = URLtoRoute(item.url);
            const numOfFilms = item.films.length;
            const numOfStarships = item.starships.length;
            const numOfSpecies = item.species.length;
            const numOfVehicles = item.vehicles.length;

            return (
              <Pressable onPress={() => router.push(path)} style={styles.filmContainer}>
                <View style={styles.filmViewContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <View style={styles.subTitleContainer}>
                    {numOfFilms > 0 && (
                      <>
                        <Text style={styles.subTitle}>{numOfFilms}</Text>
                        <MaterialCommunityIcons name="television-play" size={28} color="black" style={styles.statsIcon} />
                      </>
                    )}
                    {numOfStarships > 0 && (
                      <>
                        <Text style={styles.subTitle}>{numOfStarships}</Text>
                        <MaterialCommunityIcons name="space-station" size={28} color="black" style={styles.statsIcon} />
                      </>
                    )}
                    {numOfSpecies > 0 && (
                      <>
                        <Text style={styles.subTitle}>{numOfSpecies}</Text>
                        <MaterialCommunityIcons name="alien" size={28} color="black" style={styles.statsIcon} />
                      </>
                    )}
                    {numOfVehicles > 0 && (
                      <>
                        <Text style={styles.subTitle}>{numOfVehicles}</Text>
                        <MaterialCommunityIcons name="car-convertible" size={28} color="black" style={styles.statsIcon} />
                      </>
                    )}
                  </View>
                </View>
              </Pressable>
            );
          }}
          keyExtractor={(item) => `${item.url} + 1`}
        />
      </View>
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: BarlowFonts.Barlow_600SemiBold,
    color: colors.secondary,
    fontSize: 32,
    textAlign: "center",
    paddingVertical: 6,
  },
  subTitleContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "100%",
  },
  subTitle: {
    fontFamily: BarlowFonts.Barlow_400Regular_Italic,
    color: colors.secondary,
    fontSize: 16,
    alignItems: "center",
  },
  filmContainer: {
    backgroundColor: colors.primary,
    marginVertical: 12,
    marginHorizontal: 24,
    borderRadius: 16,
  },
  filmViewContainer: {
    marginHorizontal: 24,
    paddingVertical: 12,
  },
  image: {
    flex: 1,
    aspectRatio: 0.677777777778,
  },
  statsIcon: {},
});
