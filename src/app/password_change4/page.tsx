import { getUser } from "@/actions/user";
import Link from "next/link";

export default async function PasswordChange4Page() {

    const user = await getUser();

    return (
        <div className="card">
            <h1>Password Changed!</h1>
            <p>Your new password has been set successfully.</p>
            {user && (
                <Link href="/user"><button className="btn">Back to account</button></Link>
            )}
            {!user && (
                <Link href="/login"><button className="btn">Back to login</button></Link>
            )}
        </div>
    );
}
