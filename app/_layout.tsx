import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../helpers/colors";

const Layout = () => {
  return (
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  );
};

export default Layout;
