import "./App.css";
import Family from "./components/Family/Family";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Information from "./components/Information/Information";

function App() {
	return (
		<div className='App'>
			<Header />
			<Home />
			<Information />
			<Family />
		</div>
	);
}

export default App;
