import { StyleSheet, View, Pressable, Text } from "react-native";
import { colors } from "../helpers/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import type { DefaultListType, paths } from "../types";

const DefaultList = ({ pageArray, orientation }: DefaultListType) => {
  const listPressHandler = (path: paths) => router.push(path);

  return (
    <View
      style={[
        styles.container,
        orientation === "vertical" && styles.verContainer,
      ]}
    >
      {pageArray.map((page) => (
        <Pressable
          key={page.key}
          onPress={() => listPressHandler(page.path)}
          style={({ pressed }) => [
            pressed && { backgroundColor: colors.darkPrimary },
            styles.pressableContainer,
            orientation === "vertical" && styles.verPressableContainer,
          ]}
        >
          <View
            style={[
              styles.pressableViewContainer,
              orientation === "vertical" && styles.verPressableViewContainer,
            ]}
          >
            <MaterialCommunityIcons
              name={page.icon_name}
              size={80}
              color="black"
              style={[
                styles.pressableViewIcon,
                orientation === "vertical" && styles.verPressableViewIcon,
              ]}
            />
            <Text
              style={[
                styles.pressableViewText,
                orientation === "vertical" && styles.verPressableViewText,
              ]}
            >
              {page.name}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default DefaultList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: "-1.33%",
  },
  verContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  pressableContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    borderWidth: 6,
    borderRadius: 25,
    height: "16%",
    marginVertical: "1.33%",
  },
  verPressableContainer: {
    minWidth: "48%",
    marginHorizontal: "1%",
    height: "30%",
    marginVertical: "1.5%",
  },
  pressableViewContainer: {
    borderRadius: 25,
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.primary,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  verPressableViewContainer: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    justifyContent: "center",
    flexDirection: "column",
  },
  pressableViewIcon: {
    flex: 1,
    alignSelf: "center",
  },
  verPressableViewIcon: {
    flex: 2,
    fontSize: 120,
  },
  pressableViewText: {
    flex: 2,
    textAlign: "right",
    textAlignVertical: "center",
    color: colors.foreground,
    fontSize: 40,
    fontFamily: "Barlow_600SemiBold",
  },
  verPressableViewText: {
    flex: 1,
    fontSize: 30,
    textAlign: "center",
  },
});
