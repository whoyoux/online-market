import type { User } from "better-auth";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

export default function AuthUser({ user }: { user: User }) {
	const router = useRouter();
	const signOutAndRedirect = async () => {
		await signOut();
		router.push("/");
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost" className="rounded-full">
					<Avatar className="size-[90%]">
						<AvatarImage src={user.image ?? ""} alt="User avatar" />
						<AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<Link href="/#">
						<DropdownMenuItem>
							My offers
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
					</Link>
					<DropdownMenuItem disabled>
						Add new offer
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem disabled>
						My messages
						<DropdownMenuShortcut>⇧⌘M</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<Link href="/account">
					<DropdownMenuItem>My account</DropdownMenuItem>
				</Link>
				<DropdownMenuItem disabled>Support</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={async () => await signOutAndRedirect()}>
					Log out
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
