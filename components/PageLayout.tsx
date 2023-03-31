import { StyleSheet, View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
};

export default PageLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    width: "100%",
  },
});
