import { Card as CardType } from "../../types";
import styles from "./Card.module.css";

type CardProps = { className?: string; cardData: CardType; cardOnClick: (id: number) => void };

export const Card: React.FC<CardProps> = ({ className, cardData, cardOnClick }) => {
    return (
        <div
            onClick={() => cardOnClick(cardData.id)}
            className={`${styles.Card} ${className}`}
            style={cardData.isOpen ? { backgroundColor: cardData.color } : {}}
        ></div>
    );
};
