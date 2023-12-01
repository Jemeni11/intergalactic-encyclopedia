import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View, ImageBackground, Pressable, ScrollView, useWindowDimensions } from "react-native";

import PageLayout from "../../components/PageLayout";
import filmsData from "../../data/films.json";
import { colors } from "../../helpers/colors";
import { BarlowFonts } from "../../helpers/fonts";

const FilmIndex = () => {
  const router = useRouter();
  const { film } = useGlobalSearchParams();
  const { height } = useWindowDimensions();

  const filmData = filmsData.results.filter((f) => f.episode_id === +film!);

  if (filmData.length === 0) {
    return (
      <PageLayout>
        <Stack.Screen
          options={{
            title: "Error",
            headerTransparent: false,
          }}
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: BarlowFonts.Barlow_700Bold,
              color: colors.primary,
              textAlign: "center",
            }}
          >
            Cannot find film
          </Text>
        </View>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={[styles.banner, { height: height / 3 }]}>
          <ImageBackground source={require("../../assets/stars-and-galaxy-in-space.jpg")} resizeMode="stretch" style={styles.bannerImage}>
            <View style={{ flex: 1, margin: 16 }}>
              <Pressable style={{ flex: 1 }} onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={28} color={colors.primary} />
              </Pressable>
            </View>
            <View
              style={{
                flex: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.bannerText}>{filmData[0].title}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionTitle}>Opening Crawl</Text>
          <Text style={styles.descriptionText}>{filmData[0].opening_crawl}</Text>
        </View>
      </ScrollView>
    </PageLayout>
  );
};

export default FilmIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    flex: 3,
  },
  bannerImage: {
    flex: 1,
    paddingVertical: 16,
  },
  bannerText: {
    color: colors.primary,
    fontFamily: BarlowFonts.Barlow_900Black,
    fontSize: 42,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  descriptionView: {
    flex: 1,
  },
  descriptionTitle: {
    color: colors.primary,
    fontFamily: BarlowFonts.Barlow_900Black,
    fontSize: 24,
    textAlign: "center",
    marginVertical: 16,
  },
  descriptionText: {
    color: colors.darkPrimary,
    fontFamily: BarlowFonts.Barlow_700Bold,
    fontSize: 18,
    textAlign: "center",
  },
});
