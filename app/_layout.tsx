import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      {/* <StatusBar style="light" translucent={true} /> */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
