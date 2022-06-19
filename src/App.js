import Form from "./Components/Form";
import Dashboard from "./Components/Dashboard";
import Issuelist from "./Components/Issuelist";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Dashboard />
			<Form />
			<Issuelist />
		</div>
	);
}

export default App;
