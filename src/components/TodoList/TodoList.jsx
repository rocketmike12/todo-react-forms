import { Component } from "react";

import { Todo } from "./Todo";

import styles from "./TodoList.module.scss";

export class TodoList extends Component {
	render() {
		return (
			<>
				<ul className={styles["todo-list"]}>
					{this.props.todos.map((todo) => (
						<Todo onCheck={this.props.onCheck} handleDelete={this.props.handleDelete} id={todo.id} text={todo.text} completed={todo.completed} key={todo.id} />
					))}
				</ul>
			</>
		);
	}
}
