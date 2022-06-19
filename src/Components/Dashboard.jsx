import React, { useEffect } from "react";
import "./style.css";
import { useGlobalContext } from "../context";

const DashboardComponent = ({ title, count }) => {
	return (
		<div className="dashboard-item">
			<h2 className="title">{title}</h2>
			<h2 className="count">{count}</h2>
		</div>
	);
};

function Dashboard() {
	const { DasboardData } = useGlobalContext();
	const { total, solved, pending } = DasboardData;
	return (
		<div className="dasboard-container">
			<h1>Dashboard</h1>
			<div className="wrapper">
				<DashboardComponent title="Total Issues" count={total} />
				<DashboardComponent title="Solved Issues" count={solved} />
				<DashboardComponent title="Pending Issues" count={pending} />
			</div>
		</div>
	);
}

export default Dashboard;
