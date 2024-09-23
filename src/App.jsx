import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				element={<Root />}
				path="/"
			>
				<Route
					element={<Home />}
					index
				/>
				<Route path="/about" />
				{/* Dynamic route below */}
				<Route path="/page-preview" />
			</Route>
		)
	);

	return (
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default App;
