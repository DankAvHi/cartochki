import { generateCards } from "@/entities/card/lib/generateCards";
import { Reducer } from "react";
import { CHECK_MATCH, FLIP_TILE, GAME_OVER } from "../../constants";
import type { Card, CheckMatchAction, FlipCardAction, GameOverAction, GameState } from "../../types";

export type ReducerType = Reducer<GameState, FlipCardAction | CheckMatchAction | GameOverAction>;

export const gameReducer: ReducerType = (state, action): GameState => {
    switch (action.type) {
        case FLIP_TILE: {
            const { selectedCards } = state;

            if (selectedCards.length === 2) {
                return state;
            }

            let selectedCard: Card | null = null;
            const newGrid = state.grid.map((row) => {
                const rowCardIndex = row.findIndex((card) => card.id === action.index);

                if (rowCardIndex !== -1) {
                    const rowCard = row[rowCardIndex];
                    selectedCard = rowCard;
                    const newRow = [...row];
                    newRow[rowCardIndex] = { ...rowCard, isOpen: true };
                    return newRow;
                } else return row;
            });
            if (state.completedCards.findIndex((card) => card.id === selectedCard!.id) !== -1) {
                return state;
            }
            return {
                ...state,
                grid: newGrid,
                selectedCards: [...selectedCards, selectedCard as unknown as Card],
            };
        }
        case CHECK_MATCH: {
            const [card1, card2] = state.selectedCards;

            if (typeof card2 === "undefined") {
                return { ...state };
            }

            if (card1.color === card2.color) {
                const newCompletedCards = [...state.completedCards, card1, card2];
                return { ...state, selectedCards: [], completedCards: newCompletedCards };
            } else {
                const newGrid = state.grid.map((row) => {
                    const card1Id = row.findIndex((card) => card.id === card1.id);
                    const card2Id = row.findIndex((card) => card.id === card2.id);
                    const newRow = [...row];
                    if (card1Id != -1) {
                        newRow[card1Id] = { ...newRow[card1Id], isOpen: false };
                    }
                    if (card2Id != -1) {
                        newRow[card2Id] = { ...newRow[card2Id], isOpen: false };
                    }
                    return newRow;
                });

                return { ...state, selectedCards: [], grid: newGrid };
            }
        }
        case GAME_OVER:
            return {
                ...state,
                gameOver: true,
            };
        default:
            return state;
    }
};

export const flipCard = (index: number): FlipCardAction => ({
    type: FLIP_TILE,
    index,
});

export const checkMatch = (): CheckMatchAction => ({
    type: CHECK_MATCH,
});

export const gameOver = (): GameOverAction => ({
    type: GAME_OVER,
});

export const initialState: GameState = {
    grid: generateCards(),
    selectedCards: [],
    gameOver: false,
    completedCards: [],
};
