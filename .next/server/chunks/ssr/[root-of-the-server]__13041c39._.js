module.exports = [
"[externals]/bcrypt [external] (bcrypt, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("bcrypt", () => require("bcrypt"));

module.exports = mod;
}),
"[project]/src/lib/hashing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkPassword",
    ()=>checkPassword,
    "hashPassword",
    ()=>hashPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs)");
;
function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].hash(password, 10).then(function(hash) {
        return hash;
    });
}
function checkPassword(password, hash) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$29$__["default"].compare(password, hash).then(function(result) {
        return result;
    });
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/actions/user.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002f7f5d8d772eb91f07fb463207f3ec0d0d5c5458":"deleteAddress","007a158d3aca296f5cbd316c5c39829db4f895b8c4":"logout","00f68349053daf54e69fb707297ec58b3c0e6dc3a9":"getUser","4042198a465f2f95dc7fa6782dd1769ed3a861305e":"verifyCode","4042d6eadec4f0682f618743f683eca9b55c7bdbc2":"updateEmail","4053df4365de20f19f09c4db3e3bca7e1c4bae86d5":"passwordChange3","4064458dc0a2a5a2b4ab3c8c3a50378646e0182575":"updateAddress","40ea7360969dcde56bb5883b1e6763b5c13bc6d5af":"passwordChange","60b90846dd0bea0f1ad2130e78ae5cdd39ad4fc912":"login","7039f1ab3c03bd70047a2696fd011cbd3a7f570f0f":"register"},"",""] */ __turbopack_context__.s([
    "deleteAddress",
    ()=>deleteAddress,
    "getUser",
    ()=>getUser,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "passwordChange",
    ()=>passwordChange,
    "passwordChange3",
    ()=>passwordChange3,
    "register",
    ()=>register,
    "updateAddress",
    ()=>updateAddress,
    "updateEmail",
    ()=>updateEmail,
    "verifyCode",
    ()=>verifyCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hashing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/validator/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function login(username, password) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    async function generateSessionId() {
        while(true){
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for(let i = 0; i < 10; i++){
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            const check = await db.selectFrom("session").where("session_id", "=", result).selectAll().executeTakeFirst();
            if (!check) return result;
        }
    }
    if (!username || !password) {
        return {
            error: "Missing fields"
        };
    }
    const user = await db.selectFrom("users").where("username", "=", username).selectAll().executeTakeFirst();
    if (!user) {
        return {
            error: "Invalid credentials"
        };
    }
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPassword"])(password, user.password)) {
        return {
            error: "Wrong password"
        };
    }
    let session = await db.selectFrom("session").where("user_id", "=", user.id).selectAll().executeTakeFirst();
    if (!session) {
        await db.insertInto("session").values({
            user_id: user.id,
            session_id: await generateSessionId(),
            expiration: Date.now() + 1000 * 60 * 60 * 24 * 7
        }).execute();
        session = await db.selectFrom("session").where("user_id", "=", user.id).selectAll().executeTakeFirst();
    } else if (session.expiration < Date.now()) {
        await db.updateTable("session").set({
            expiration: Date.now() + 1000 * 60 * 60 * 24 * 7
        }).where("user_id", "=", user.id).execute();
    }
    if (session) {
        keksiky.set("session", session.session_id, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        });
    }
    return {
        success: true
    };
}
async function logout() {
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionId = keksiky.get("session")?.value;
    if (!sessionId) {
        return {
            error: "Not logged in, did not find session id"
        };
    }
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const session = await db.selectFrom("session").selectAll().where("session_id", "=", sessionId).executeTakeFirst();
    if (!session) {
        return {
            error: "session not found"
        };
    }
    await db.deleteFrom("session").where("session_id", "=", sessionId).execute();
    keksiky.delete("session");
    return {
        success: true
    };
}
async function register(email, username, password) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    if (!email || !username || !password) {
        return {
            error: "Missing fields"
        };
    }
    const name_check = await db.selectFrom("users").where("username", "=", username).selectAll().executeTakeFirst();
    if (name_check) {
        return {
            error: "Username already exists"
        };
    }
    const email_check = await db.selectFrom("users").where("email", "=", email).selectAll().executeTakeFirst();
    if (email_check) {
        return {
            error: "An account with this email already exists"
        };
    }
    if (password.length < 8) {
        return {
            error: "Password must be at least 8 characters long"
        };
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isEmail(email)) {
        return {
            error: "Invalid email"
        };
    }
    await db.insertInto("users").values({
        email: email,
        username: username,
        password: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])(password)
    }).execute();
    return {
        success: true
    };
}
async function getUser() {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionId = keksiky.get("session")?.value;
    if (!sessionId) {
        return null;
    }
    const session = await db.selectFrom("session").where("session_id", "=", sessionId).selectAll().executeTakeFirst();
    if (!session) {
        return null;
    }
    if (session.expiration < Date.now()) {
        logout();
        return null;
    }
    const user = await db.selectFrom("users").where("id", "=", session.user_id).selectAll().executeTakeFirst();
    if (!user) {
        return null;
    }
    return user;
}
async function passwordChange(mail) {
    const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    const stringNumber = randomNumber.toString();
    const hashedNumber = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])(stringNumber);
    keksiky.set("number", hashedNumber, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 300
    });
    keksiky.set("reset_email", mail, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 600
    });
    await resend.emails.send({
        from: "PetShop <onboarding@resend.dev>",
        to: mail,
        subject: "Password change",
        html: "<p>Your code is: " + stringNumber + "</p>"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/password_change2");
}
async function passwordChange3(formData) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const resetEmail = keksiky.get("reset_email")?.value;
    const password1 = formData.get("password1");
    const password2 = formData.get("password2");
    if (!resetEmail || !password1 || !password2 || password1 !== password2 || password1.length < 8) {
        return {
            error: "Invalid request or passwords do not match"
        };
    }
    const hashedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])(password1);
    await db.updateTable("users").set({
        password: hashedPassword
    }).where("email", "=", resetEmail).execute();
    keksiky.delete("reset_email");
    keksiky.delete("number");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/password_change4");
}
async function updateAddress(formData) {
    const user = await getUser();
    if (!user) return;
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const data = {
        street: formData.get("street"),
        house_number: formData.get("house_number"),
        city: formData.get("city"),
        zip_code: formData.get("zip_code"),
        country: formData.get("country"),
        phone_number: formData.get("phone_number"),
        name: formData.get("name"),
        surname: formData.get("surname")
    };
    const existing = await db.selectFrom("user_address").select("id").where("user_id", "=", user.id).executeTakeFirst();
    if (existing) {
        await db.updateTable("user_address").set(data).where("user_id", "=", user.id).execute();
    } else {
        await db.insertInto("user_address").values({
            ...data,
            user_id: user.id
        }).execute();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/user");
}
async function deleteAddress() {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const user = await getUser();
    if (!user) return;
    await db.deleteFrom("user_address").where("user_id", "=", user.id).execute();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/user");
}
async function updateEmail(newEmail) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const user = await getUser();
    if (!user) return {
        error: "Not logged in"
    };
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$validator$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isEmail(newEmail)) return {
        error: "Invalid email"
    };
    const exists = await db.selectFrom("users").where("email", "=", newEmail).selectAll().executeTakeFirst();
    if (exists) return {
        error: "Email already in use"
    };
    await db.updateTable("users").set({
        email: newEmail
    }).where("id", "=", user.id).execute();
    return {
        success: true
    };
}
async function verifyCode(input) {
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const code = keksiky.get("number")?.value ?? "";
    const isCodeValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkPassword"])(input, code);
    if (isCodeValid) {
        return {
            success: true
        };
    } else {
        return {
            error: "Invalid code"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    logout,
    register,
    getUser,
    passwordChange,
    passwordChange3,
    updateAddress,
    deleteAddress,
    updateEmail,
    verifyCode
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "60b90846dd0bea0f1ad2130e78ae5cdd39ad4fc912", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "007a158d3aca296f5cbd316c5c39829db4f895b8c4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(register, "7039f1ab3c03bd70047a2696fd011cbd3a7f570f0f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUser, "00f68349053daf54e69fb707297ec58b3c0e6dc3a9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(passwordChange, "40ea7360969dcde56bb5883b1e6763b5c13bc6d5af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(passwordChange3, "4053df4365de20f19f09c4db3e3bca7e1c4bae86d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAddress, "4064458dc0a2a5a2b4ab3c8c3a50378646e0182575", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAddress, "002f7f5d8d772eb91f07fb463207f3ec0d0d5c5458", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmail, "4042d6eadec4f0682f618743f683eca9b55c7bdbc2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyCode, "4042198a465f2f95dc7fa6782dd1769ed3a861305e", null);
}),
"[project]/.next-internal/server/app/user/address/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/user.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/user.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/user/address/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/user.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "002f7f5d8d772eb91f07fb463207f3ec0d0d5c5458",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAddress"],
    "007a158d3aca296f5cbd316c5c39829db4f895b8c4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "00f68349053daf54e69fb707297ec58b3c0e6dc3a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"],
    "4042198a465f2f95dc7fa6782dd1769ed3a861305e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyCode"],
    "4042d6eadec4f0682f618743f683eca9b55c7bdbc2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmail"],
    "4053df4365de20f19f09c4db3e3bca7e1c4bae86d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["passwordChange3"],
    "4064458dc0a2a5a2b4ab3c8c3a50378646e0182575",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAddress"],
    "40ea7360969dcde56bb5883b1e6763b5c13bc6d5af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["passwordChange"],
    "60b90846dd0bea0f1ad2130e78ae5cdd39ad4fc912",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["login"],
    "7039f1ab3c03bd70047a2696fd011cbd3a7f570f0f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["register"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$user$2f$address$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/user/address/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/user.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/user.ts [app-rsc] (ecmascript)");
}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/user/address/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddressPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function AddressPage() {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
    if (!user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const address = await db.selectFrom("user_address").selectAll().where("user_id", "=", user.id).executeTakeFirst();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAddress"],
        style: {
            maxWidth: 500,
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: 24,
                    fontWeight: 700
                },
                children: "Address"
            }, void 0, false, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Street:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "street",
                        defaultValue: address?.street ?? "",
                        required: true,
                        style: {
                            width: "100%",
                            padding: 8,
                            borderRadius: 8,
                            marginTop: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/address/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "House number:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "house_number",
                        defaultValue: address?.house_number ?? "",
                        required: true,
                        style: {
                            width: "100%",
                            padding: 8,
                            borderRadius: 8,
                            marginTop: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/address/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "City:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "city",
                        defaultValue: address?.city ?? "",
                        required: true,
                        style: {
                            width: "100%",
                            padding: 8,
                            borderRadius: 8,
                            marginTop: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/address/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Zip code:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "zip_code",
                        defaultValue: address?.zip_code ?? "",
                        required: true,
                        style: {
                            width: "100%",
                            padding: 8,
                            borderRadius: 8,
                            marginTop: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/address/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Country:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "country",
                        defaultValue: address?.country ?? "",
                        required: true,
                        style: {
                            width: "100%",
                            padding: 8,
                            borderRadius: 8,
                            marginTop: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/address/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Phone number:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "phone_number",
                        defaultValue: address?.phone_number ?? "",
                        required: true,
                        style: {
                            width: "100%",
                            padding: 8,
                            borderRadius: 8,
                            marginTop: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/address/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Name:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "name",
                        defaultValue: address?.name ?? "",
                        required: true,
                        style: {
                            width: "100%",
                            padding: 8,
                            borderRadius: 8,
                            marginTop: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/address/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Surname:",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "surname",
                        defaultValue: address?.surname ?? "",
                        required: true,
                        style: {
                            width: "100%",
                            padding: 8,
                            borderRadius: 8,
                            marginTop: 4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/address/page.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                style: {
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: 12,
                    border: "none",
                    borderRadius: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    marginTop: 12
                },
                children: "Save"
            }, void 0, false, {
                fileName: "[project]/src/app/user/address/page.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/address/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/user/address/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/user/address/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__13041c39._.js.map