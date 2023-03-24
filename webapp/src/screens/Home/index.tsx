import { Box, Button, HStack, Image, Pressable } from "native-base";
import React, { useCallback, useMemo, useRef, useState } from "react";
import SwipeCard from "../../util/DeckSwipeWrapper";
import { ICardDirection } from "../../util/interfaces";
import {
  RevealMore,
  ShowPrevious,
  SwipeLeft,
  SwipeRight,
  SwipeTop,
} from "../../xcomp/CardCTA";

const deck = [
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    id: 1,
    name: "name1",
  },
  {
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    id: 2,
    name: "name2",
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    id: 3,
    name: "name3",
  },
  {
    img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    id: 4,
    name: "name4",
  },
  {
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    id: 5,
    name: "name5",
  },
];
const Home: React.FC = () => {
  const [swipeInfo, setSwipeInfo] = useState("none");
  const [currentIndex, setCurrentIndex] = useState(deck?.length - 1);
  const [lastDirection, setLastDirection] = useState<ICardDirection>();

  const updateSwipeInfo = useCallback(async (dir: ICardDirection | "none") => {
    setSwipeInfo(dir);
  }, []);

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(deck.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < deck?.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (
    direction: ICardDirection,
    nameToDelete: string,
    index: number
  ) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const swipe = async (dir: ICardDirection) => {
    if (canSwipe && currentIndex < deck?.length) {
      // @ts-ignore
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    // @ts-ignore
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <Box py={6} px={3} flex={1}>
      <Box position="relative" flex={1} shadow={4} borderTopRadius={"20px"}>
        {deck?.map((card, index) => (
          <SwipeCard
            key={card?.id}
            // @ts-ignore
            ref={childRefs[index]}
            swipeRequirementType="position"
            swipeThreshold={100}
            flickOnSwipe={true}
            className="cardContainer"
            onSwipe={(dir: ICardDirection) => swiped(dir, card?.name, index)}
            onCardLeftScreen={() => updateSwipeInfo("none")}
            preventSwipe={["down"]}
            onSwipeRequirementFulfilled={updateSwipeInfo}
            onSwipeRequirementUnfulfilled={() => {
              updateSwipeInfo("none");
            }}
          >
            <Image
              borderRadius={"20px"}
              src={card?.img}
              resizeMode={"cover"}
              style={{ height: "100%", width: "100%" }}
            />
          </SwipeCard>
        ))}

        <HStack
          borderBottomRadius={"20px"}
          bottom={0}
          right={0}
          left={0}
          py={"20px"}
          position={"absolute"}
          space={4}
          alignItems="center"
          justifyContent={"center"}
          bg="rgba(0,0,0,0.85)"
          shadow={"11"}
        >
          <Pressable onPress={() => goBack()}>
            {({ isPressed }) => {
              return <ShowPrevious isPressed={isPressed} />;
            }}
          </Pressable>

          <Pressable
            // @ts-ignore
            disabled={!canSwipe}
            onPress={() => swipe("left")}
          >
            {({ isPressed }) => {
              return (
                <SwipeLeft isPressed={isPressed || swipeInfo === "left"} />
              );
            }}
          </Pressable>

          <Pressable
            // @ts-ignore
            disabled={!canSwipe}
            onPress={() => swipe("up")}
          >
            {({ isPressed }) => {
              return <SwipeTop isPressed={isPressed || swipeInfo === "up"} />;
            }}
          </Pressable>

          <Pressable
            // @ts-ignore
            disabled={!canSwipe}
            onPress={() => swipe("right")}
          >
            {({ isPressed }) => {
              return (
                <SwipeRight isPressed={isPressed || swipeInfo === "right"} />
              );
            }}
          </Pressable>

          <Pressable
            // @ts-ignore
            disabled={!canSwipe}
            // onPress={() => swipe("right")}
          >
            {({ isPressed }) => {
              return <RevealMore isRevealed={true} isPressed={isPressed} />;
            }}
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
};

export default Home;
