import { Center, VStack, Text, Spinner, Heading } from "native-base";
import React from "react";

export default function Loading({ message = "Loading", ...prop }) {
  return (
    <Center
      _text={{
        color: "white",
        fontWeight: "bold",
      }}
      {...prop?._center}
    >
      {prop?.customComponent ? (
        prop?.customComponent
      ) : (
        <VStack space={2} alignItems={"center"}>
          <VStack space={10} alignItems="center">
            {prop?.icon ? (
              prop.icon
            ) : (
              <Spinner
                color={"button.500"}
                accessibilityLabel="Loading posts"
                size="lg"
              />
            )}
            <VStack alignItems="center" space={2}>
              <Heading color="button.500" fontSize="22px">
                {message}
              </Heading>
            </VStack>
          </VStack>
        </VStack>
      )}
    </Center>
  );
}
