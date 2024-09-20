import { Card } from "./card";

export type GameState = {
    grid: Card[][];
    gameOver: boolean;
    selectedCards: Card[];
    completedCards: Card[];
};
