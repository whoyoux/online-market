import getSession from "@/lib/auth-server";
import { notFound } from "next/navigation";

const AccountPage = async () => {
	const session = await getSession();
	if (!session) return notFound();
	return <div>AccountPage</div>;
};

export default AccountPage;
