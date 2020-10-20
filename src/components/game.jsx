import React, { useState } from "react";
import Board from "./board";
import calculateWinner from "../helper";

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
		if (winner || squares(i)) return;
		// select square
		squares[i] = xo;
		setHistory([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXisNext(!xIsNext);
	};
	return <div></div>;
};

export default Game;
