"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";

interface SearchBarProps {
	className?: string;
	placeholder?: string;
	autoFocus?: boolean;
}

export function SearchBar({
	className,
	placeholder = "Wyszukaj...",
	autoFocus = false,
}: SearchBarProps) {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			router.push(`/offer/search?q=${encodeURIComponent(searchQuery.trim())}`);
		}
	};

	return (
		<form onSubmit={handleSearch} className={`relative w-full ${className}`}>
			<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<Input
				type="text"
				placeholder={placeholder}
				className="w-full pl-10 pr-4"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				autoFocus={autoFocus}
			/>
		</form>
	);
}
