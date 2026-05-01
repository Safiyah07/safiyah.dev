import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			workbox: {
				// Precache app shell (JS, CSS, HTML, fonts, data)
				globPatterns: ["**/*.{js,css,html,svg,woff2,woff,ttf,json}"],
				// Runtime caching: images and PDFs cache on first view
				runtimeCaching: [
					{
						urlPattern: /\.(?:png|jpg|jpeg|gif|webp|avif)$/,
						handler: "CacheFirst",
						options: {
							cacheName: "image-cache",
							expiration: {
								maxEntries: 80,
								maxAgeSeconds: 30 * 24 * 60 * 60,
							},
						},
					},
					{
						urlPattern: /\/data\/.*\.json$/,
						handler: "NetworkFirst",
						options: {
							cacheName: "data-cache",
							networkTimeoutSeconds: 3,
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 24 * 60 * 60,
							},
						},
					},
					{
						urlPattern: /\/papers\/.*\.pdf$/,
						handler: "CacheFirst",
						options: {
							cacheName: "pdf-cache",
							expiration: {
								maxEntries: 20,
								maxAgeSeconds: 30 * 24 * 60 * 60,
							},
						},
					},
				],
			},
			manifest: {
				name: "Safiyah Amedu — Portfolio",
				short_name: "Safiyah",
				theme_color: "#0b1215",
				background_color: "#0b1215",
				display: "minimal-ui",
				icons: [],
			},
		}),
	],
	base: "/",
});
