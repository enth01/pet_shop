import { cookies } from "next/headers";
import VerifyCode from "./verifyCode";

export default async function PasswordChange2Page() {
    const keksiky = await cookies();
    const code = keksiky.get("number")?.value ?? "";
    return (
        <div>
            <p>enter the code:</p>
            <VerifyCode code={code} />
        </div>
    );
}
