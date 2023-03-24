import React from "react";

declare type Direction = "left" | "right" | "up" | "down";
declare type SwipeHandler = (direction: Direction) => void;
declare type CardLeftScreenHandler = (direction: Direction) => void;
declare type SwipeRequirementFufillUpdate = (direction: Direction) => void;
declare type SwipeRequirementUnfufillUpdate = () => void;

export = SwipeCard;
