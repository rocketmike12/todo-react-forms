import { Component } from "react";

import styles from "./TodoEditor.module.scss";

export class TodoEditor extends Component {
	handleSubmit = (evt) => {
		evt.preventDefault();

		const form = evt.currentTarget;
		const todo = form.elements.todo.value;

		this.props.onAdd(todo);

		form.reset();
	};

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit} className={styles["todo-editor"]}>
					<input type="text" placeholder="текст" name="todo" className={styles["todo-editor__input"]} />
					<button type="submit" className={styles["todo-editor__button"]}>
						додати
					</button>
				</form>
			</>
		);
	}
}
