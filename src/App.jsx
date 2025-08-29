import { Component } from "react";

import { nanoid } from "nanoid";

import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { Filter } from "./components/Filter/Filter";
import { TodoList } from "./components/TodoList/TodoList";

import initialTodos from "./data/todo.json";

class App extends Component {
	constructor() {
		super();

		this.state = {
			todos: initialTodos,
			filter: ""
		};
	}

	handleAdd = (text) => {
		this.setState((state) => ({
			todos: [...state.todos, { id: nanoid(), text: text, completed: false }],
			filter: state.filter
		}));
	};

	handleFilter = () => {};

	handleCheck = (id) => {
		this.setState((state) => ({
			todos: state.todos.map((el) => {
				if (el.id == id) {
					return { ...el, completed: !el.completed };
				}

				return el;
			}),
			filter: state.filter
		}));
	};

	render() {
		return (
			<>
				<TodoEditor onAdd={this.handleAdd} />
				<Filter onFilter={this.handleFilter} />
				<TodoList todos={this.state.todos} onCheck={this.handleCheck} />
			</>
		);
	}
}

export default App;
