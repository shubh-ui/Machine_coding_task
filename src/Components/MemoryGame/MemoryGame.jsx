import { useEffect, useState } from "react"

export const MemoryGame = () => {
    const [cards, setCards] = useState(greedGenerator());
    const [isLock, setIsLock] = useState(false);
    const [flipedCards, setFilpedCards] = useState([]);


    const handleClicked = (id) => {
        if(cards[id].isFliped || isLock) {
            return;
        }
        const copyCards = [...cards];
        copyCards[id].isFliped = true;
        setFilpedCards(prev => ([...prev, id]));
    }

    useEffect(() => {
        let timerId
        if(flipedCards.length == 2) {
            setIsLock(true);
            timerId = setTimeout(() => {
                if(cards[flipedCards[0]].number !== cards[flipedCards[1]].number) {
                    cards[flipedCards[0]].isFliped = false;
                    cards[flipedCards[1]].isFliped = false;
                }
                setIsLock(false);
                setFilpedCards([]);
            }, 3000)
        }

        return () => {
            clearTimeout(timerId)
        }
    },[flipedCards])

    return (
        <div>
            <h3>Memory Game</h3>
            <div style={{display:'grid', gridTemplateColumns: `repeat(6, 1fr)`, gap:'1rem'}}>
                {cards.map(({id, number, isFliped}) => {
                    return <button style={{
                                            height:'40px', 
                                            width:'40px',
                                            cursor:'pointer',
                                            border: `${isFliped ? '2px solid green' : ''}`}}
                                    key={id}
                                    onClick={() => handleClicked(id)}>
                        {isFliped ? number : '?'}
                    </button>
                })}
            </div>
        </div>
    )
}


const greedGenerator = () => {
    const arr = Array.from({length : 18}, (_, index) => index)
    const data = [...arr, ...arr].sort((_) => Math.random() - 0.5);
    const grid = data.map((item, index) => ({
        id: index,
        number: item,
        isFliped: false
    }))
    return grid;
}