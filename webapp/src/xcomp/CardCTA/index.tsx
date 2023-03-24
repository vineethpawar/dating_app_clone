import { Box } from "native-base";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export const ShowPrevious: React.FC<{ isPressed?: boolean }> = ({
  isPressed,
}) => {
  return (
    <Box
      p={2}
      borderWidth={"2px"}
      borderColor={isPressed ? "lightgrey" : "white"}
      borderRadius={"100%"}
      style={{
        transform: [{ scale: isPressed ? 1 : 1.05 }],
      }}
    >
      <ReplayIcon
        style={{
          fontSize: "25px",
          color: isPressed ? "lightgrey" : "white",
        }}
      />
    </Box>
  );
};

export const SwipeLeft: React.FC<{ isPressed?: boolean }> = ({ isPressed }) => {
  return (
    <Box
      p={2}
      bg={isPressed ? "#dc0000" : "transparent"}
      borderWidth={"3px"}
      borderColor={isPressed ? "#dc0000" : "#ab0000"}
      borderRadius={"100%"}
      style={{
        transform: [{ scale: isPressed ? 1 : 1.05 }],
      }}
    >
      <CloseIcon
        style={{
          fontSize: "30px",
          color: isPressed ? "white" : "#ab0000",
        }}
      />
    </Box>
  );
};

export const SwipeTop: React.FC<{ isPressed?: boolean }> = ({ isPressed }) => {
  return (
    <Box
      p={2}
      borderWidth={"2px"}
      bg={isPressed ? "#192bc2" : "transparent"}
      borderColor={isPressed ? "#192bc2" : "#1034a6"}
      borderRadius={"100%"}
      style={{
        transform: [{ scale: isPressed ? 1 : 1.08 }],
      }}
    >
      <StarIcon
        style={{
          fontSize: "25px",
          color: isPressed ? "white" : "#1034a6",
        }}
      />
    </Box>
  );
};

export const SwipeRight: React.FC<{ isPressed?: boolean }> = ({
  isPressed,
}) => {
  return (
    <Box
      p={2}
      bg={isPressed ? "#dc0000" : "transparent"}
      borderWidth={"3px"}
      borderColor={isPressed ? "#dc0000" : "#ab0000"}
      borderRadius={"100%"}
      style={{
        transform: [{ scale: isPressed ? 1 : 1.05 }],
      }}
    >
      <FavoriteBorderOutlinedIcon
        style={{
          fontSize: "30px",
          color: isPressed ? "white" : "#ab0000",
        }}
      />
    </Box>
  );
};

export const RevealMore: React.FC<{
  isPressed?: boolean;
  isRevealed: boolean;
}> = ({ isPressed, isRevealed }) => {
  return (
    <Box
      style={{
        transform: [{ scale: isPressed ? 1 : 1.05 }],
      }}
    >
      {isRevealed ? (
        <ArrowCircleUpIcon
          style={{
            fontSize: "40px",
            color: isPressed ? "lightgrey" : "white",
          }}
        />
      ) : (
        <ArrowCircleDownIcon
          style={{
            fontSize: "40px",
            color: isPressed ? "lightgrey" : "white",
          }}
        />
      )}
    </Box>
  );
};
