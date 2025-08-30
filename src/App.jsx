import { Component } from "react";

import { nanoid } from "nanoid";

import { Container } from "./components/Container/Container";

import { TodoEditor } from "./components/TodoEditor/TodoEditor";
import { Info } from "./components/Info/Info";
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
		if (!text) return;

		this.setState((state) => ({
			todos: [...state.todos, { id: nanoid(), text: text, completed: false }],
			filter: state.filter
		}));
	};

	handleFilter = (e) => {
		this.setState({ filter: e.currentTarget.value });
	};

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

	handleDelete = (id) => {
		this.setState((state) => ({ todos: state.todos.filter((todo) => todo.id !== id), filter: state.filter }));
	};

	render() {
		return (
			<>
				<Container>
					<Info taskQuantity={this.state.todos.length} completedQuantity={this.state.todos.filter((todo) => todo.completed).length} />
					<Filter filterValue={this.state.filter} handleFilter={this.handleFilter} />
					<TodoEditor onAdd={this.handleAdd} />
					<TodoList
						todos={this.state.todos.filter((todo) => todo.text.toLowerCase().includes(this.state.filter.toLowerCase()))}
						onCheck={this.handleCheck}
						handleDelete={this.handleDelete}
					/>
				</Container>
			</>
		);
	}
}

export default App;
