import { Text, View } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{
          uri: "https://i-01jjrn09m7mv856sar6h8svyx5.power.betaverve.com/investor/login",
        }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
