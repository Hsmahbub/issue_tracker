import React from "react";
import "./style.css";
import { useGlobalContext } from "../context.js";
function Issuelist() {
	const { formData, handleClick, handleSolved } = useGlobalContext();
	return (
		<div className="issue-container">
			<h1>Issue Details</h1>
			<div className="issue-wrapper">
				{formData.map((item, i) => (
					<>
						{item.title !== "" && (
							<div
								className="item-container"
								id={item.id}
							>
								<div className="list-item" key={i}>
									<span className="items">
										Issue ID: {item.id}
									</span>
									<span className="items desc">
										{item.title}
									</span>
									<span className="items">
										Complexity: {item.difficulty}
									</span>
									<span className="items">
										Forward to: {item.forward}
									</span>
									<div className="btn-group">
										<button
											type="button"
											className="submit-btn"
											style={{
												background: "#F8AC49",
												marginRight: ".5rem",
											}}
											onClick={()=> handleSolved(i)}
										>
											Close
										</button>
										<button
											type="button"
											onClick={() => handleClick(i)}
											className="submit-btn"
											style={{ background: "#E16250" }}
										>
											Delete
										</button>
									</div>
								</div>
							</div>
						)}
					</>
				))}
			</div>
		</div>
	);
}

export default Issuelist;
