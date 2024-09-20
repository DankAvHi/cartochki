import { INITIAL_CARDS } from "../constants";

export const generateCards = () => {
    const sortedCards = INITIAL_CARDS.sort(() => {
        const randA = (Math.random() * 100).toFixed();
        const randB = (Math.random() * 100).toFixed();
        return +randA - +randB;
    });

    const gameGrid = [
        [sortedCards[0], sortedCards[1], sortedCards[2], sortedCards[3]],
        [sortedCards[4], sortedCards[5], sortedCards[6], sortedCards[7]],
        [sortedCards[8], sortedCards[9], sortedCards[10], sortedCards[11]],
        [sortedCards[12], sortedCards[13], sortedCards[14], sortedCards[15]],
    ];
    return gameGrid;
};
