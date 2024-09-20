import { Cards } from "../../types";
import { Card } from "../Card";
import styles from "./CardGrid.module.css";

type CardGridProps = { className?: string; cards: Cards; cardOnClick: (id: number) => void };

export const CardGrid: React.FC<CardGridProps> = ({ className, cards, cardOnClick }) => {
    return (
        <div className={`${styles.CardGrid} ${className}`}>
            {cards.map((row) =>
                row.map((card, index) => {
                    return <Card key={index} cardOnClick={cardOnClick} cardData={card} />;
                }),
            )}
        </div>
    );
};
