import { Box, Button, HStack, Image } from "native-base";
import React, { useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";
import { ICardDirection } from "../../util/interfaces";

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
  const [currentIndex, setCurrentIndex] = useState(deck.length - 1);
  const [lastDirection, setLastDirection] = useState<ICardDirection>();

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

  const outOfFrame = (name: string, idx: number) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // @ts-ignore
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard(); // handle the case in which go back is pressed before card goes outOfFrame
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
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
    <Box p={6}>
      <Box position="relative" h={"70vh"}>
        {deck?.map((card, index) => (
          <TinderCard
            key={card?.id}
            // @ts-ignore
            ref={childRefs[index]}
            className="cardContainer"
            onSwipe={(dir) => swiped(dir, card?.name, index)}
            onCardLeftScreen={() => outOfFrame(card?.name, index)}
            preventSwipe={["down"]}
          >
            <Image
              src={card?.img}
              style={{ height: "70vh" }}
              borderRadius={"20px"}
            />
          </TinderCard>
        ))}
      </Box>

      <HStack space={4} justifyContent={"center"}>
        <Button
          // @ts-ignore
          disabled={!canSwipe}
          onPress={() => swipe("left")}
        >
          Swipe left!
        </Button>
        <Button
          // @ts-ignore

          onPress={() => goBack()}
        >
          Undo swipe!
        </Button>
        <Button
          // @ts-ignore
          disabled={!canSwipe}
          onPress={() => swipe("right")}
        >
          Swipe right!
        </Button>
      </HStack>
    </Box>
  );
};

export default Home;
