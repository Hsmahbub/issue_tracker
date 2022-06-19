import { useState, useContext, createContext, useEffect } from "react";
const AppContext = createContext();

const AppProvider = (props) => {
	// for form.jsx file
	const [formDisplay, setFormDisplay] = useState(false);
	const [title, setTitle] = useState("");
	const [id, setId] = useState(5001);
	const [difficulty, setDifficulty] = useState("");
	const [forward, setForward] = useState("");
	const [formData, setFormData] = useState([]);
	const [total, setTotal] = useState(formData.length);
	const [pending, setPending] = useState(formData.length);
	const [solved, setSolved] = useState(0);
	const [DasboardData, setDasboardData] = useState({
		total,
		solved,
		pending,
	});
	const handleTitle = (e) => {
		setTitle(e.target.value);
	};
	const handleDifficulty = (e) => {
		setDifficulty(e.target.value);
	};
	const handleForward = (e) => {
		setForward(e.target.value);
	};
	const toggleForm = () => {
		if (!formDisplay) {
			setFormDisplay(true);
		} else setFormDisplay(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title || difficulty || forward !== "") {
			setId((prev) => prev + 1);
			setTotal(formData.length + 1);
			setPending(formData.length + 1);
			setFormData([
				{
					id,
					title,
					difficulty,
					forward,
				},
				...formData,
			]);
		} else if (title || difficulty || forward === "") {
			alert("Please enter the following data");
		}

		e.target.reset();
		setTitle("");
		setDifficulty("");
		setForward("");
	};

	// for Issue.jsx file
	const handleClick = (index) => {
		// setFormData((items) => items.filter((_, i) => i !== index));
	};
	const handleSolved = (index) => {
		setFormData((items) => items.filter((_, i) => i !== index));
		setPending((prev) => prev - 1);
		setSolved((prev) => prev + 1);
	};
	useEffect(() => {
		setDasboardData({
			total,
			pending,
			solved,
		});
	}, [total, pending, solved, formData]);
	console.log(DasboardData);
	return (
		<AppContext.Provider
			value={{
				formDisplay,
				formData,
				handleTitle,
				handleDifficulty,
				handleForward,
				toggleForm,
				handleSubmit,
				handleSolved,
				handleClick,
				DasboardData,
			}}
		>
			<>{props.children}</>
		</AppContext.Provider>
	);
};
export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
