import { Component } from "react";

export class TodoEditor extends Component {
	handleSubmit = (evt) => {
		evt.preventDefault();

		const form = evt.currentTarget;
		const todo = form.elements.todo.value;

		console.log(todo);

		this.props.onAdd(todo);

		form.reset();
	};

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="todo" />
					<button type="submit">add</button>
				</form>
			</>
		);
	}
}
