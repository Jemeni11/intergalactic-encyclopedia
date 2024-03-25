import "expo-dev-client";
import {
  useFonts,
  Barlow_400Regular,
  Barlow_400Regular_Italic,
  Barlow_500Medium,
  Barlow_500Medium_Italic,
  Barlow_600SemiBold,
  Barlow_600SemiBold_Italic,
  Barlow_700Bold,
  Barlow_700Bold_Italic,
  Barlow_800ExtraBold,
  Barlow_800ExtraBold_Italic,
  Barlow_900Black,
  Barlow_900Black_Italic,
} from "@expo-google-fonts/barlow";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import PageLayout from "../components/PageLayout";
import { colors } from "../helpers/colors";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_400Regular_Italic,
    Barlow_500Medium,
    Barlow_500Medium_Italic,
    Barlow_600SemiBold,
    Barlow_600SemiBold_Italic,
    Barlow_700Bold,
    Barlow_700Bold_Italic,
    Barlow_800ExtraBold,
    Barlow_800ExtraBold_Italic,
    Barlow_900Black,
    Barlow_900Black_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <PageLayout onLayout={onLayoutRootView}>
        <Stack
          screenOptions={{
            contentStyle: { flex: 1, backgroundColor: colors.secondary },
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerTitleStyle: {
              fontFamily: "Barlow_700Bold",
            },
            headerStyle: {
              backgroundColor: colors.secondary,
            },
            headerTintColor: colors.primary,
          }}
        />
      </PageLayout>
    </SafeAreaProvider>
  );
};

export default Layout;
