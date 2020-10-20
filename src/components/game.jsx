import React, { useState } from "react";
import Board from "./board";
import { calculateWinner } from "../helper";

const Game = () => {
	// initial state of null values
	const [history, setHistory] = useState([Array(9).fill(null)]);
	// init state for the beginning
	const [stepNumber, setStepNumber] = useState(0);
	// x starts always playing
	const [xIsNext, setXisNext] = useState(true);
	// calculate if there is has been a winner
	const winner = calculateWinner(history[stepNumber]);
	const xo = xIsNext ? "X" : "O";

	const handleClick = (i) => {
		const historyPoint = history.slice(0, stepNumber + 1);
		const current = historyPoint[stepNumber];
		const squares = [...current];
		// return if win or occupied
		if (winner || squares[i]) return;
		// select square
		squares[i] = xo;
		setHistory([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXisNext(!xIsNext);
	};

	const moveTo = (step) => {
		setStepNumber(step);
		// need to know if it was x or o
		setXisNext(step % 2 === 0);
	};

	const showHistory = () =>
		history.map((_step, showToMove) => {
			const dist = showToMove ? `Go to move #${showToMove}` : "Go to start";
			return (
				<li key={_step}>
					<button onClick={() => moveTo(showToMove)}>{dist}</button>
				</li>
			);
		});

	return (
		<div>
			<React.Fragment>
				<h1>React Tic Tac Toe with hooks</h1>
				<Board squares={history[stepNumber]} onClick={handleClick} />
				<div className='info-wrapper'>
					<h3>History</h3>
					<div>{showHistory()}</div>
					<div>
						<h3>{winner ? "Winner " + winner : "Next Player " + xo}</h3>
					</div>
				</div>
			</React.Fragment>
		</div>
	);
};

export default Game;
