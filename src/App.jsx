import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useContext } from "react";

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
	const { theme } = useContext(ThemeContext);
	return (
		<main
			className={`
					${
						theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
					} min-h-svh h-full max-h-fit py-5 px-20 md:px-10 sm:px-5 max-w-full`}
		>
			<Header />
			<Outlet />
		</main>
	);
};

export default App;
