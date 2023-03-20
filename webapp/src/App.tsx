import React from "react";
import "./App.css";
import { NativeBaseProvider, Box, VStack } from "native-base";
import { BottomTab } from "./xcomp/bottomtab";
import ActiveScreen from "./screens";

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack height={"100vh"} w={"100%"} bg="red.400">
        <Box flex={1}>
          <ActiveScreen />
        </Box>
        <Box>
          <BottomTab />
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
}
