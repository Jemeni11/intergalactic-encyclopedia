import { Pressable } from "react-native";
import { useState } from "react";
import { Stack } from "expo-router";
import PageLayout from "../components/PageLayout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../helpers/colors";
import DefaultList from "../components/Lists";

// "https://swapi.dev/api/films/"
// "https://swapi.dev/api/people/"
// "https://swapi.dev/api/planets/"
// "https://swapi.dev/api/species/"
// "https://swapi.dev/api/starships/"
// "https://swapi.dev/api/vehicles/"

type pageArrayT = {
  key: string;
  name: string;
  path: string;
  icon_name:
    | "television-play"
    | "account-group"
    | "earth"
    | "alien"
    | "space-station"
    | "car-convertible";
}[];

export type pageArrayType = {
  pageArray: pageArrayT;
};

export default function Home() {
  const [listOrientation, setListOrientation] = useState<
    "horizontal" | "vertical"
  >("horizontal");
  const pagesArray: pageArrayT = [
    {
      key: "1",
      name: "Films",
      path: "/films",
      icon_name: "television-play",
    },
    {
      key: "2",
      name: "People",
      path: "/people",
      icon_name: "account-group",
    },
    {
      key: "3",
      name: "Planets",
      path: "/planets",
      icon_name: "earth",
    },
    {
      key: "4",
      name: "Species",
      path: "/species",
      icon_name: "alien",
    },
    {
      key: "5",
      name: "Starships",
      path: "/starships",
      icon_name: "space-station",
    },
    {
      key: "6",
      name: "Vehicles",
      path: "/vehicles",
      icon_name: "car-convertible",
    },
  ];
  return (
    <PageLayout>
      <Stack.Screen
        options={{
          title: "Intergalactic Encyclopedia",
          headerRight: () => (
            <Pressable
              android_ripple={{
                borderless: true,
                color: "hsl(50.4, 94.59%, 60%)",
              }}
              onPress={() =>
                setListOrientation((prev) =>
                  prev === "horizontal" ? "vertical" : "horizontal"
                )
              }
            >
              {listOrientation !== "horizontal" ? (
                <Ionicons name="list" size={28} color={colors.primary} />
              ) : (
                <Ionicons name="grid" size={28} color={colors.primary} />
              )}
            </Pressable>
          ),
        }}
      />
      <DefaultList pageArray={pagesArray} orientation={listOrientation} />
    </PageLayout>
  );
}
