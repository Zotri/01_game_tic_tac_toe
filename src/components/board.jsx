import React from "react";
import Sequare from "./square";

const board = ({ squares, onClick }) => {
	return (
		<div className='board'>
			{squares.map((square, i) => (
				<Sequare key={i} value={square} onClick={() => onClick(i)} />
			))}
		</div>
	);
};

export default board;
