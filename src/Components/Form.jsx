import React from "react";
import "./style.css";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
const Inputs = ({ type, placeholder, onChange, id, label }) => {
	return (
		<div className="input">
			<label htmlFor="title">{label}</label>
			<input
				className="input-data"
				type={type}
				placeholder={placeholder}
				name={id}
				onChange={onChange}
				id={id}
			/>
		</div>
	);
};

function Form() {
	const {
		formData,
		formDisplay,
		handleTitle,
		handleDifficulty,
		handleForward,
		toggleForm,
		handleSubmit,
	} = useGlobalContext();

	useEffect(() => {
		console.log(formData);
	})
	return (
		<>
			<div className="form-container">
				<div className="create-issue">
					<button
						className="create-complaine-btn"
						onClick={toggleForm}
					>
						{formDisplay ? "Delete" : "Make a Complain"}
					</button>
				</div>
				{formDisplay && (
					<div className="wrapper">
						<form action="#" onSubmit={handleSubmit}>
							<Inputs
								type="text"
								placeholder="Type your issue"
								id="title"
								label="Issue title"
								onChange={handleTitle}
							/>
							<div className="input">
								<label htmlFor="deficulty">Complexity</label>
								<select
									className="input-data select"
									name="deficulty"
									id="deficulty"
									onChange={handleDifficulty}
								>
									<option value="easy">Easy</option>
									<option value="medium">Medium</option>
									<option value="hard">Hard</option>
								</select>
							</div>

							<Inputs
								type="text"
								placeholder="Type where to forward"
								id="forward to"
								label="Forward to"
								onChange={handleForward}
							/>
							<button className="submit-btn" type="submit">
								{" "}
								Submit
							</button>
						</form>
					</div>
				)}
			</div>
		</>
	);
}

export default Form;
