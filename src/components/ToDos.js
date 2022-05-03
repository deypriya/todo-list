import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function ToDos(props) {
	const { item, index, handleComplete, handleDelete } = props;
	const [checked, setChecked] = useState(item.isComplete);
	return (
		<div className="todo-item">
			<div className="todo-box">
				<FontAwesomeIcon
					icon={checked ? faSquareCheck : faSquare}
					color="white"
					onClick={() => {
						setChecked(!checked);
						handleComplete(index);
					}}
				/>
				<p style={{ textDecoration: checked ? "line-through" : "none" }}>{item.data}</p>
			</div>
			<FontAwesomeIcon icon={faTrashCan} color="red" onClick={() => handleDelete(index)} />
		</div>
	);
}

export default ToDos;
