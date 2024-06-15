import { useState, useEffect, SetStateAction } from "react";

const MemoryGame = () => {
    // Game state and logic
    const [cards, setCards] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 5, 2, 4, 7, 6, 8, 9, 1,
    ]); // Initialize card array
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<number[]>([]);

    const handleCardClick = (index: number) => {
        // Handle card click logic
        console.log("Card clicked", index);
        if (matchedCards.includes(index)) return; // Do nothing if the card is already matched
        if (flippedCards.includes(index)) return; // Do nothing if the card is already flipped
        // Clicked on an unflipped card
        var newFlippedCard = [...flippedCards, index];
        setFlippedCards(newFlippedCard);
        if (newFlippedCard.length === 2) {
            if (cards[newFlippedCard[0]] === cards[index]) {
                setMatchedCards((prev) => [...prev, newFlippedCard[0], index]);
            }
            setFlippedCards([]); // Reset the flipped cards
        }
    };

    return (
        <div className="grid grid-cols-4 gap-4">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={`card ${
                        flippedCards.includes(index) ? "flipped" : ""
                    }`}
                    onClick={() => handleCardClick(index)}
                >
                    {(
                        matchedCards.includes(index)
                            ? "matched"
                            : flippedCards.includes(index)
                    )
                        ? card
                        : "Back"}
                </div>
            ))}
        </div>
    );
};

export default MemoryGame;
