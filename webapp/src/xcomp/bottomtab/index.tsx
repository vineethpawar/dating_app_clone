import React from "react";
import { Box, HStack, Center, Pressable, Divider } from "native-base";

// MUI icons
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";

export function BottomTab() {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      // maxW="300px"
      alignSelf="center"
      borderTopColor={"light.300"}
      borderTopWidth="1px"
    >
      <HStack alignItems="center" safeAreaBottom shadow={6} minH="60px">
        <Pressable
          //   @ts-ignore
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            {selected === 1 ? (
              <ViewCarouselIcon
                style={{
                  fontSize: "37px",
                  color: "black",
                }}
              />
            ) : (
              <ViewCarouselOutlinedIcon
                style={{
                  fontSize: "32px",
                  color: "black",
                }}
              />
            )}
          </Center>
        </Pressable>

        <Divider
          orientation="vertical"
          height="60%"
          w="1px"
          color={"light.300"}
        />

        <Pressable
          //   @ts-ignore
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.5}
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            {selected === 2 ? (
              <ChatBubbleOutlinedIcon
                style={{
                  fontSize: "28px",
                  color: "black",
                }}
              />
            ) : (
              <ChatBubbleOutlineOutlinedIcon
                style={{
                  fontSize: "23px",
                  color: "black",
                }}
              />
            )}
          </Center>
        </Pressable>

        <Divider
          orientation="vertical"
          height="60%"
          w="1px"
          color={"light.300"}
        />

        <Pressable
          //   @ts-ignore
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.6}
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            {selected === 3 ? (
              <AutoAwesomeIcon
                style={{
                  fontSize: "35px",
                  color: "black",
                }}
              />
            ) : (
              <AutoAwesomeOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              />
            )}
          </Center>
        </Pressable>

        <Divider
          orientation="vertical"
          height="60%"
          w="1px"
          color={"light.300"}
        />

        <Pressable
          //   @ts-ignore
          cursor="pointer"
          opacity={selected === 4 ? 1 : 0.5}
          flex={1}
          onPress={() => setSelected(4)}
        >
          <Center>
            {selected === 4 ? (
              <PersonIcon
                style={{
                  fontSize: "35px",
                  color: "black",
                }}
              />
            ) : (
              <PersonOutlineOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              />
            )}
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
}
