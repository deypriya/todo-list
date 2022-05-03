import React, { useState, useEffect } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import ToDos from "./components/ToDos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
	const [addTask, setAddTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const handleChange = (event) => {
		setAddTask(event.target.value);
	};
	useEffect(() => {
		const fetchData = JSON.parse(localStorage.getItem("tasks"));
		if (fetchData) {
			setTasks(fetchData);
		}
		// setTasks(trainingData);
	}, []);
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);
	const handleAdd = () => {
		setTasks([{ data: addTask, isComplete: false }, ...tasks]);
		setAddTask("");
	};
	const handleComplete = (index) => {
		setTasks(
			tasks.map((item, indx) => {
				if (indx === index) {
					return { ...item, isComplete: !item.isComplete };
				}
				return item;
			})
		);
	};
	const handleDelete = (index) => {
		setTasks(
			tasks.filter((item, indx) => {
				return indx !== index;
			})
		);
	};
	console.log(tasks);
	return (
		<div className="container">
			<div className="box">
				<h1 className="title">To do List</h1>
				<div className="input-container">
					<input
						type="text"
						placeholder="Add New"
						className="add-inp"
						value={addTask}
						onChange={handleChange}
					/>
					<button onClick={handleAdd} className="add-btn">
						<span style={{ marginRight: 10 }}>Add</span> <FontAwesomeIcon icon={faArrowRight} />
					</button>
				</div>
				<Scrollbar style={{ height: 400 }}>
					{tasks.map((item, index) => (
						<ToDos
							key={index}
							item={item}
							index={index}
							handleDelete={handleDelete}
							handleComplete={handleComplete}
						/>
					))}
				</Scrollbar>
			</div>
		</div>
	);
};

export default App;
