import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

export const metadata: Metadata = {
	title: "Connectify",
	description:
		"Connectify is a sleek, user-friendly video conferencing app for seamless virtual meetings and collaboration. With high-quality video, secure connections, and intuitive features, Connectify makes online communication effortless.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ClerkProvider
				appearance={{
					layout: {
						logoImageUrl: "/icons/logo.svg",
						socialButtonsVariant: "iconButton",
					},
					variables: {
						colorText: "#fff",
						colorPrimary: "#0e78f9",
						colorBackground: "#1c1f2e",
						colorInputBackground: "#252a41",
						colorInputText: "#fff",
					},
				}}>
				<body className="bg-dark-2">
					{children}
					<Toaster />
				</body>
			</ClerkProvider>
		</html>
	);
}
