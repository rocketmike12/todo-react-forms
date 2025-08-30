import { Component } from "react";

import styles from "./Info.module.scss";

export class Info extends Component {
	render() {
		return (
			<>
				<div className={styles["info"]}>
					<p className={styles["info__text"]}>Всього завдань: {this.props.taskQuantity}</p>
					<p className={styles["info__text"]}>Виконано завдань: {this.props.completedQuantity}</p>
				</div>
			</>
		);
	}
}
