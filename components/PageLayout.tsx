import { StyleSheet, View, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { LayoutChangeEvent } from "react-native";

const PageLayout = ({
  children,
  onLayout,
}: {
  children: React.ReactNode;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      onLayout={onLayout}
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
