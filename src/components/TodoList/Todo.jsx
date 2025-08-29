import { Component } from "react";

export class Todo extends Component {
	render() {
		// console.log(this.props);
		return (
			<>
				<li>
					<p>{this.props.text}</p>
					<input
						type="checkbox"
						checked={this.props.completed}
						onChange={() => {
							console.log(this.props.id);
							this.props.onCheck(this.props.id);
						}}
					/>
				</li>
			</>
		);
	}
}
