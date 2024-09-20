import { useReducer } from "react";
import { CardGrid } from "../CardGrid";
import styles from "./Game.module.css";
import { checkMatch, flipCard, gameOver, gameReducer, initialState, ReducerType } from "./gameReducer";

export type GameProps = { className?: string };

export const Game: React.FC<GameProps> = ({ className }) => {
    const [state, dispatch] = useReducer<ReducerType>(gameReducer, initialState);

    const cardOnClick = (index: number) => {
        dispatch(flipCard(index));
        setTimeout(() => {
            dispatch(checkMatch());
            if (state.completedCards.length === 14) dispatch(gameOver());
        }, 1000);
    };

    return state.gameOver ? (
        <>
            <h1 className={styles.win}>{`You win!`}</h1>
            <button className={styles.restart} onClick={() => window.location.reload()}>{`Restart`}</button>
        </>
    ) : (
        <CardGrid cardOnClick={cardOnClick} cards={state.grid} className={`${styles.Game} ${className}`} />
    );
};
