import { Component } from "react";

import { MdDeleteOutline } from "react-icons/md";

import styles from "./TodoList.module.scss";

export class Todo extends Component {
	handleDelete = () => {
		this.props.handleDelete(this.props.id);
	};

	render() {
		return (
			<>
				<li className={styles["todo-list__item"]}>
					<div className={styles["todo-list__checkbox"]}>
						<input
							type="checkbox"
							checked={this.props.completed}
							onChange={() => {
								this.props.onCheck(this.props.id);
							}}
							className={styles["todo-list__checkbox-input"]}
						/>
						<span className={styles["todo-list__checkbox-checkmark"]}></span>
					</div>

					<p className={`${styles["todo-list__text"]} ${this.props.completed ? styles["todo-list__text-checked"] : ""}`}>{this.props.text}</p>

					<button className={styles["todo-list__delete"]} onClick={this.handleDelete}>
						<MdDeleteOutline />
					</button>
				</li>
			</>
		);
	}
}
