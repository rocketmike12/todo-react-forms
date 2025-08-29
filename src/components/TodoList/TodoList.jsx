import { Component } from "react";

import { Todo } from "./Todo";

export class TodoList extends Component {
	render() {
		return (
			<>
				<ul>
					{this.props.todos.map((todo) => (
						<Todo onCheck={this.props.onCheck} id={todo.id} text={todo.text} completed={todo.completed} key={todo.id} />
					))}
				</ul>
			</>
		);
	}
}
