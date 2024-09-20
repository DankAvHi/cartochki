import { CHECK_MATCH, FLIP_TILE, GAME_OVER } from "../constants";

export type FlipCardAction = {
    type: typeof FLIP_TILE;
    index: number;
};

export type CheckMatchAction = {
    type: typeof CHECK_MATCH;
};

export type GameOverAction = {
    type: typeof GAME_OVER;
};
