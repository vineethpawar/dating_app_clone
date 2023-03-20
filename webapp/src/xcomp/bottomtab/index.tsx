import React from "react";
import { Box, Text, HStack, Center, Pressable } from "native-base";

// MUI icons
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

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
    >
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          //   @ts-ignore
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <Center>
            {selected === 1 ? (
              <ViewCarouselIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              />
            ) : (
              <ViewCarouselOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              />
            )}
          </Center>
        </Pressable>

        <Pressable
          //   @ts-ignore
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            {selected === 2 ? (
              <ChatBubbleOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              />
            ) : (
              <ChatBubbleOutlineOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              />
            )}
          </Center>
        </Pressable>

        <Pressable
          //   @ts-ignore
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <Center>
            {selected === 3 ? (
              <FavoriteOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              />
            )}
          </Center>
        </Pressable>
        <Pressable
          //   @ts-ignore
          cursor="pointer"
          opacity={selected === 4 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(4)}
        >
          <Center>
            {selected === 4 ? (
              <PersonIcon
                style={{
                  fontSize: "30px",
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
