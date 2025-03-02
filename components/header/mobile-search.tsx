"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { SearchBar } from "./search-bar";

export function MobileSearch() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" size="icon" className="md:hidden">
					<Search className="h-5 w-5" />
					<span className="sr-only">Wyszukaj</span>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogTitle>Find your item</DialogTitle>

				<SearchBar autoFocus placeholder="Czego szukasz?" />
				<Button>Search</Button>
			</DialogContent>
		</Dialog>
	);
}
