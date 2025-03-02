"use client";

import Link from "next/link";
import LoginButton from "./login-button";
import { ThemeDropdown } from "../theme-dropdown";
import { useSession } from "@/lib/auth-client";
import AuthUser from "./auth-user";
import { Button } from "../ui/button";
import { SearchBar } from "./search-bar";
import { MobileSearch } from "./mobile-search";

function Header() {
	const { isPending, data: session } = useSession();

	return (
		<header className="w-full max-w-screen-xl mx-auto px-2 py-6 flex justify-between items-center border-b mb-8">
			<div className="flex items-center gap-4">
				<Link href="/">
					<h1 className="text-lg font-semibold">OnlineMarket</h1>
				</Link>
				<MobileSearch />
				<div className="hidden md:block w-[300px]">
					<SearchBar />
				</div>
			</div>
			<div className="flex items-center gap-2">
				{session ? (
					<AuthUser user={session.user} />
				) : (
					<LoginButton isPending={isPending} />
				)}

				<ThemeDropdown />
			</div>
		</header>
	);
}

export default Header;
