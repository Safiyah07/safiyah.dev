import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
	return (
		<ThemeProvider>
			<div>
				<Home />{" "}
			</div>
		</ThemeProvider>
	);
}

export default App;
