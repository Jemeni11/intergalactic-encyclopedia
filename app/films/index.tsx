import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import PageLayout from "../../components/PageLayout";
import { Stack, useRouter } from "expo-router";
import { colors } from "../../helpers/colors";
import { BarlowFonts } from "../../helpers/fonts";
import React from "react";
import filmsData from "../../data/films.json";
import DefaultList from "../../components/Lists";
// import { Image } from "expo-image";

const FilmsIndex = () => {
  const router = useRouter();

  // TODO: Check if wrapping this in state
  // TODO: will stop that annoying refresh
  const films = filmsData.results;

  const imagePaths = {
    "5": require("../../assets/films/Episode5.jpeg"),
    "6": require("../../assets/films/Episode6.jpeg"),
    "4": require("../../assets/films/Episode4.jpeg"),
    "1": require("../../assets/films/Episode1.jpeg"),
    "2": require("../../assets/films/Episode2.jpeg"),
    "3": require("../../assets/films/Episode3.jpeg"),
    "7": require("../../assets/films/Episode7.jpeg"),
  };

  // const newFilmData = films.map((newFilmList) => [ ...newFilmList])

  return (
    <PageLayout>
      <Stack.Screen
        options={{
          title: "Films",
          headerTransparent: false,
        }}
      />
      <View>
        <FlatList
          data={films}
          numColumns={1}
          horizontal={false}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => router.push(`/films/${item.episode_id}/`)}
                style={{ marginVertical: 12 }}
              >
                <View style={styles.filmContainer}>
                  <ImageBackground
                    // @ts-ignore
                    source={imagePaths[item.episode_id]}
                    style={styles.image}
                  />
                  <Text style={styles.pageDescription}>{item.title}</Text>
                </View>
              </Pressable>
            );
          }}
          keyExtractor={(item) => `${item.episode_id} + 1`}
        />
      </View>
    </PageLayout>
  );
};

export default FilmsIndex;

const styles = StyleSheet.create({
  pageDescription: {
    fontFamily: BarlowFonts.Barlow_400Regular,
    color: colors.primary,
    fontSize: 36,
    textAlign: "center",
  },
  filmContainer: {
    marginHorizontal: 8,
  },
  image: {
    flex: 1,
    aspectRatio: 0.677777777778,
  },
});
