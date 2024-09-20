import { Game } from "@/entities/card/ui/Game/Game";
import styles from "./GameWrapper.module.css";

type GameWrapperProps = { className?: string };

export const GameWrapper: React.FC<GameWrapperProps> = ({ className }) => {
    return (
        <div className={`${styles.GameWrapper} ${className}`}>
            <h1 className={styles.heading}>{`Hi, it's memory game`}</h1>
            <p className={styles.heading}>{`Match cards with same color`}</p>

            <Game />
        </div>
    );
};
