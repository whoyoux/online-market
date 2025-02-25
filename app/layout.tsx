import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header/header";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Online Market",
	description: "name must have to change",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${fontSans.variable} font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Header />
					<main className="max-w-screen-xl mx-auto px-2">{children}</main>
					<Toaster richColors />
				</ThemeProvider>
			</body>
		</html>
	);
}
