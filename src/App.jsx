import { useCallback, useContext, useEffect, useState } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import { LoadedContext } from "./context/LoadedContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import About from "./pages/About";
import Papers from "./pages/Papers";
import ProjectDisplay from "./pages/ProjectDisplay";

gsap.registerPlugin(ScrollTrigger);

export const Root = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<main
			className={`${
				theme === "light" ? "bg-light text-dark" : "bg-dark text-light dark-theme"
			} min-h-screen`}
		>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Root />} path="/">
			<Route element={<Home />} index />
			<Route path="/about" element={<About />} />
			<Route path="/papers" element={<Papers />} />
			<Route path="/project/:name" element={<ProjectDisplay />} />
		</Route>
	)
);

function App() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (!loaded) return;
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);
		const rafCb = (time) => lenis.raf(time * 1000);
		gsap.ticker.add(rafCb);
		gsap.ticker.lagSmoothing(0);
		return () => {
			lenis.destroy();
			gsap.ticker.remove(rafCb);
		};
	}, [loaded]);

	const handleComplete = useCallback(() => setLoaded(true), []);

	return (
		<ThemeProvider>
			<LoadedContext.Provider value={loaded}>
				{!loaded && <Preloader onComplete={handleComplete} />}
				<Cursor />
				<RouterProvider router={router} />
			</LoadedContext.Provider>
		</ThemeProvider>
	);
}

export default App;
