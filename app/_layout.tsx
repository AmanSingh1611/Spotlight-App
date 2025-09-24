import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ClerkAndConvexProvider from '@/providers/ClerkAndConvexProvider'
import InitialLayout from "@/components/initialLayout";

const publishedKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if(!publishedKey){
  throw new Error(
    "Missing Published Key."
  );
}
export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
