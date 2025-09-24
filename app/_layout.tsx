import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'

const publishedKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if(!publishedKey){
  throw new Error(
    "Missing Published Key."
  );
}
export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishedKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <SafeAreaProvider>
            <SafeAreaView style = {{flex: 1, backgroundColor: "#000"}}>
                <Stack screenOptions={{headerShown: false}} >
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
