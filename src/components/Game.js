import React, { useState } from 'react'
import { calculateWinner } from "../helper"
import Board from './Board'

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [step, setStep] = useState(0)
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(history[step])
    const oponente = xIsNext ? "X" : "O"

    const irA = (step) => {
        setStep(step)
        step % 2 === 0 ? 
            setXisNext(true) : setXisNext(false)
    }

    const handleClick = (i) => {
        const historyPoint = history.slice(0, step + 1)
        const current = historyPoint[step]
        const squares = [...current]
        if(winner || squares[i]){
            return
        }

        squares[i] = oponente;
        setHistory([...historyPoint, squares])
        setStep(historyPoint.length)
        setXisNext(!xIsNext)
    }

    return (
        <React.Fragment>
            <h1>Ta te ti</h1>
            <Board squares={history[step]} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>Historia</h3>
                    {history.map((step, move) => {
                        const ir = move ? `Ir a #${move}` : "Ir al inicio"
                        return(
                            <li key={move}>
                                <button onClick={() => irA(move)}>{ir}</button>
                            </li>
                        ) 
                    })}
                </div>

            </div>
            <h3>{winner ?  `Ganador: ${winner}` : `Sigue: ${oponente}`}</h3>
        </React.Fragment>
    )

}

export default Game;