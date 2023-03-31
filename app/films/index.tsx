import { StyleSheet, Text, View } from "react-native";
import PageLayout from "../../components/PageLayout";
import { Stack } from "expo-router";
import { colors } from "../../helpers/colors";
import React from "react";

const index = () => {
  return (
    <PageLayout>
      <Stack.Screen
        options={{
          title: "Films",
          headerTransparent: false,
        }}
      />
      <View></View>
    </PageLayout>
  );
};

export default index;

const styles = StyleSheet.create({});
