import React, { Component } from "react";

const handleClick = () => {
	console.log("button is clicked");
};
class Sequare extends Component {
	render() {
		return (
			<div>
				<button
					type='button'
					style={{ marginTop: 20, marginLeft: 20 }}
					className='btn btn-outline-secondary btn-lg m2'
					onClick={() => handleClick()}></button>
			</div>
		);
	}
}

export default Sequare;
