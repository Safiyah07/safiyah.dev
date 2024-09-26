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
		<main className="py-5 lg:px-20 md:px-10 sm:px-5 max-w-full">
			{/* <Header /> */}
			<Outlet />
		</main>
	);
};

export default App;
