import { Component } from "react";

import styles from "./Filter.module.scss";

export class Filter extends Component {
	render() {
		return (
			<>
				<div className={styles["filter"]}>
					<input type="text" placeholder="🔍" value={this.props.filterValue} onChange={this.props.handleFilter} className={styles["filter__input"]} />
				</div>
			</>
		);
	}
}
