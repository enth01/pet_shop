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

/* __next_internal_action_entry_do_not_use__ [{"007a158d3aca296f5cbd316c5c39829db4f895b8c4":"logout","00ea7360969dcde56bb5883b1e6763b5c13bc6d5af":"passwordChange","00f68349053daf54e69fb707297ec58b3c0e6dc3a9":"getUser","4042198a465f2f95dc7fa6782dd1769ed3a861305e":"verifyCode","4042d6eadec4f0682f618743f683eca9b55c7bdbc2":"updateEmail","4053df4365de20f19f09c4db3e3bca7e1c4bae86d5":"passwordChange3","4064458dc0a2a5a2b4ab3c8c3a50378646e0182575":"updateAddress","60b90846dd0bea0f1ad2130e78ae5cdd39ad4fc912":"login","7039f1ab3c03bd70047a2696fd011cbd3a7f570f0f":"register"},"",""] */ __turbopack_context__.s([
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
async function passwordChange() {
    const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const user = await getUser();
    if (!user) {
        return;
    }
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
    await resend.emails.send({
        from: "Resend <onboarding@resend.dev>",
        to: user.email,
        subject: "Password change",
        html: "<p>Your code is: " + stringNumber + "</p>"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/password_change2");
}
async function passwordChange3(formData) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const user = await getUser();
    const password1 = formData.get("password1");
    const password2 = formData.get("password2");
    if (!user || !password1 || !password2) {
        return;
    }
    if (password1 !== password2) {
        return;
    }
    if (password1.length < 8) {
        return;
    }
    const hashedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hashing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])(password1);
    await db.updateTable("users").set({
        password: hashedPassword
    }).where("id", "=", user.id).execute();
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
    updateEmail,
    verifyCode
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "60b90846dd0bea0f1ad2130e78ae5cdd39ad4fc912", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logout, "007a158d3aca296f5cbd316c5c39829db4f895b8c4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(register, "7039f1ab3c03bd70047a2696fd011cbd3a7f570f0f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUser, "00f68349053daf54e69fb707297ec58b3c0e6dc3a9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(passwordChange, "00ea7360969dcde56bb5883b1e6763b5c13bc6d5af", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(passwordChange3, "4053df4365de20f19f09c4db3e3bca7e1c4bae86d5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAddress, "4064458dc0a2a5a2b4ab3c8c3a50378646e0182575", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEmail, "4042d6eadec4f0682f618743f683eca9b55c7bdbc2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifyCode, "4042198a465f2f95dc7fa6782dd1769ed3a861305e", null);
}),
"[project]/src/actions/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00d155b082e3fba48cb0040387aeed432b9b58657c":"makeOrder","4013e0daf469d3865f7b94b22a946e5cee5aae3d7f":"isInFavourites","402fa5e5bb4d424a3be8b07de53bdee9987c344fb0":"removeFromBasket","40596e90704641ed916cf409dfaadb626b570f8b6a":"addToFavourites","40c143e65a9fbba309b7fcf7cd5374446723cdea84":"removeFromFavourites","40e1439d139434a6a0981a1f66939369b0da0ddd3f":"addToBasket","7fcdd70ba4c45344fe57bf12dd4ba44fefabe92628":"makeTemporaryOrder"},"",""] */ __turbopack_context__.s([
    "addToBasket",
    ()=>addToBasket,
    "addToFavourites",
    ()=>addToFavourites,
    "isInFavourites",
    ()=>isInFavourites,
    "makeOrder",
    ()=>makeOrder,
    "makeTemporaryOrder",
    ()=>makeTemporaryOrder,
    "removeFromBasket",
    ()=>removeFromBasket,
    "removeFromFavourites",
    ()=>removeFromFavourites
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function addToBasket(id) {
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    let kosik = keksiky.get("cart")?.value ?? "[]";
    if (kosik === "") {
        kosik = "[]";
    }
    const basket = JSON.parse(kosik);
    const item = basket.find((item)=>item.id === id);
    if (item) {
        item.quantity += 1;
        keksiky.set("cart", JSON.stringify(basket), {
            path: "/"
        });
        return;
    }
    basket.push({
        id: id,
        quantity: 1
    });
    keksiky.set("cart", JSON.stringify(basket), {
        path: "/"
    });
}
async function removeFromBasket(id) {
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    let kosik = keksiky.get("cart")?.value ?? "[]";
    if (kosik === "") {
        kosik = "[]";
    }
    const basket = JSON.parse(kosik);
    const item = basket.find((item)=>item.id === id);
    if (item) {
        item.quantity -= 1;
        keksiky.set("cart", JSON.stringify(basket), {
            path: "/"
        });
        if (item.quantity <= 0) {
            basket.splice(basket.indexOf(item), 1);
            keksiky.set("cart", JSON.stringify(basket), {
                path: "/"
            });
        }
    }
}
async function isInFavourites(id) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
    if (user == null) {
        return false;
    }
    const favourite = await db.selectFrom("favorite_products").where("product_id", "=", id).where("user_id", "=", user.id).selectAll().executeTakeFirst();
    if (favourite) return true;
    return false;
}
async function addToFavourites(id) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
    if (user == null) {
        return;
    }
    const favourite = await db.selectFrom("favorite_products").where("product_id", "=", id).where("user_id", "=", user.id).selectAll().executeTakeFirst();
    if (favourite) {
        return;
    }
    await db.insertInto("favorite_products").values({
        user_id: user.id,
        product_id: id
    }).executeTakeFirst();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/products");
}
async function removeFromFavourites(id) {
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
    if (user == null) {
        return;
    }
    const favourite = await db.selectFrom("favorite_products").where("product_id", "=", id).where("user_id", "=", user.id).selectAll().executeTakeFirst();
    if (!favourite) {
        return;
    }
    await db.deleteFrom("favorite_products").where("product_id", "=", id).where("user_id", "=", user.id).executeTakeFirst();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/products");
}
async function makeTemporaryOrder(ulica, popisne_cislo_domu, mesto, zip_code, krajina, telefon, email, meno, priezvisko) {
    const keksiky = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    let order = keksiky.get("order")?.value ?? "";
    const basket = keksiky.get("cart")?.value ?? "[]";
    if (order != "") {
        keksiky.set("order", "", {
            path: "/",
            maxAge: 0
        });
    }
    order = JSON.stringify({
        "ulica": ulica,
        "popisne_cislo_domu": popisne_cislo_domu,
        "mesto": mesto,
        "zip_code": zip_code,
        "krajina": krajina,
        "telefon": telefon,
        "email": email,
        "meno": meno,
        "priezvisko": priezvisko,
        "cart": JSON.parse(basket)
    });
    keksiky.set("order", order, {
        path: "/"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/confirmation");
}
async function makeOrder() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const orderCookie = cookieStore.get("order")?.value;
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    if (!orderCookie) return;
    const order = JSON.parse(orderCookie);
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
    if (user == null) return;
    const result = await db.insertInto("orders").values({
        name: order.meno,
        surname: order.priezvisko,
        street: order.ulica,
        house_number: order.popisne_cislo_domu,
        city: order.mesto,
        country: order.krajina,
        zip_code: order.zip_code,
        phone_number: order.telefon,
        email: order.email,
        confirmed: 0,
        user_id: user.id
    }).executeTakeFirst();
    const orderId = Number(result.insertId);
    if (!orderId) {
        return {
            error: "Failed to create order"
        };
    }
    let total_price = 0;
    for (const item of order.cart){
        const product = await db.selectFrom("products").where("id", "=", item.id).selectAll().executeTakeFirst();
        if (!product) continue;
        total_price += item.quantity * product.price;
        await db.insertInto("order_product").values({
            order_id: orderId,
            product_id: item.id,
            quantity: item.quantity
        }).execute();
    }
    const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
    await resend.emails.send({
        from: "Resend <onboarding@resend.dev>",
        to: order.email,
        subject: "Potvrdenie objednávky",
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f1f1a; background-color: #f0f0f0; padding: 40px; margin: 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
            
            <div style="background-color: #22c55e; padding: 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Potvrdenie objednávky</h1>
            </div>
    
            <div style="padding: 30px;">
              <p style="font-size: 18px; font-weight: bold; margin-top: 0;">
                Ahoj ${order.meno} ${order.priezvisko},
              </p>
              <p>Ďakujeme za Vašu objednávku v našom obchode. Číslo vašej objednávky je <strong>${orderId}</strong>.</p>
              
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0; color: #4b5563;">Celková suma na zaplatenie:</p>
                <p style="font-size: 24px; font-weight: bold; color: #22c55e; margin: 5px 0;">${total_price / 100} €</p>
              </div>
    
              <h3 style="border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-top: 30px;">Doručovacia adresa</h3>
              <p style="margin-bottom: 0;">
                ${order.ulica}, ${order.popisne_cislo_domu}, ${order.mesto}
              </p>
            </div>
    
            <div style="background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280;">
              <p style="margin: 0;">&copy; 2026 Vaša Stránka. Všetky práva vyhradené.</p>
            </div>
            
          </div>
        </div>
        `
    });
    cookieStore.delete("cart");
    cookieStore.delete("order");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/confirmed");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addToBasket,
    removeFromBasket,
    isInFavourites,
    addToFavourites,
    removeFromFavourites,
    makeTemporaryOrder,
    makeOrder
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addToBasket, "40e1439d139434a6a0981a1f66939369b0da0ddd3f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeFromBasket, "402fa5e5bb4d424a3be8b07de53bdee9987c344fb0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(isInFavourites, "4013e0daf469d3865f7b94b22a946e5cee5aae3d7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addToFavourites, "40596e90704641ed916cf409dfaadb626b570f8b6a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeFromFavourites, "40c143e65a9fbba309b7fcf7cd5374446723cdea84", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(makeTemporaryOrder, "7fcdd70ba4c45344fe57bf12dd4ba44fefabe92628", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(makeOrder, "00d155b082e3fba48cb0040387aeed432b9b58657c", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/user.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/products.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/products.ts [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/actions/user.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/actions/products.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007a158d3aca296f5cbd316c5c39829db4f895b8c4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logout"],
    "00d155b082e3fba48cb0040387aeed432b9b58657c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeOrder"],
    "00ea7360969dcde56bb5883b1e6763b5c13bc6d5af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["passwordChange"],
    "00f68349053daf54e69fb707297ec58b3c0e6dc3a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"],
    "4013e0daf469d3865f7b94b22a946e5cee5aae3d7f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInFavourites"],
    "402fa5e5bb4d424a3be8b07de53bdee9987c344fb0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeFromBasket"],
    "4042198a465f2f95dc7fa6782dd1769ed3a861305e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyCode"],
    "4042d6eadec4f0682f618743f683eca9b55c7bdbc2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEmail"],
    "4053df4365de20f19f09c4db3e3bca7e1c4bae86d5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["passwordChange3"],
    "40596e90704641ed916cf409dfaadb626b570f8b6a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToFavourites"],
    "4064458dc0a2a5a2b4ab3c8c3a50378646e0182575",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAddress"],
    "40c143e65a9fbba309b7fcf7cd5374446723cdea84",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeFromFavourites"],
    "40e1439d139434a6a0981a1f66939369b0da0ddd3f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToBasket"],
    "60b90846dd0bea0f1ad2130e78ae5cdd39ad4fc912",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["login"],
    "7039f1ab3c03bd70047a2696fd011cbd3a7f570f0f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["register"],
    "7fcdd70ba4c45344fe57bf12dd4ba44fefabe92628",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeTemporaryOrder"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/actions/user.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/actions/products.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/products.ts [app-rsc] (ecmascript)");
}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/carousel/HeroCarousel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/carousel/HeroCarousel.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/carousel/HeroCarousel.tsx <module evaluation>", "default");
}),
"[project]/src/app/carousel/HeroCarousel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/carousel/HeroCarousel.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/carousel/HeroCarousel.tsx", "default");
}),
"[project]/src/app/carousel/HeroCarousel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/carousel/HeroCarousel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/carousel/HeroCarousel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/page.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "page-module___8aEwW__button",
  "home": "page-module___8aEwW__home",
  "latest": "page-module___8aEwW__latest",
  "price": "page-module___8aEwW__price",
  "productCard": "page-module___8aEwW__productCard",
  "productRow": "page-module___8aEwW__productRow",
});
}),
"[project]/src/app/products/products.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "products-module__E8alaG__actions",
  "active": "products-module__E8alaG__active",
  "card": "products-module__E8alaG__card",
  "description": "products-module__E8alaG__description",
  "filterButton": "products-module__E8alaG__filterButton",
  "filters": "products-module__E8alaG__filters",
  "grid": "products-module__E8alaG__grid",
  "page": "products-module__E8alaG__page",
  "price": "products-module__E8alaG__price",
});
}),
"[project]/src/app/products/addToCartButton.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/addToCartButton.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/addToCartButton.tsx <module evaluation>", "default");
}),
"[project]/src/app/products/addToCartButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/addToCartButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/addToCartButton.tsx", "default");
}),
"[project]/src/app/products/addToCartButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/products/addToCartButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/products/addToCartButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/products/addToFavouritesButton.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/addToFavouritesButton.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/addToFavouritesButton.tsx <module evaluation>", "default");
}),
"[project]/src/app/products/addToFavouritesButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/addToFavouritesButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/addToFavouritesButton.tsx", "default");
}),
"[project]/src/app/products/addToFavouritesButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/products/addToFavouritesButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/products/addToFavouritesButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/products/removeFromFavouritesButton.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/removeFromFavouritesButton.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/removeFromFavouritesButton.tsx <module evaluation>", "default");
}),
"[project]/src/app/products/removeFromFavouritesButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/products/removeFromFavouritesButton.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/products/removeFromFavouritesButton.tsx", "default");
}),
"[project]/src/app/products/removeFromFavouritesButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$removeFromFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/products/removeFromFavouritesButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$removeFromFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/products/removeFromFavouritesButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$removeFromFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/products/singleProduct.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SingleProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/products/products.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/addToCartButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/addToFavouritesButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$removeFromFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/removeFromFavouritesButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function SingleProduct(props) {
    const { product, userLoggedIn } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: "/uploads/" + product.image,
                alt: product.name,
                width: 200,
                height: 200
            }, void 0, false, {
                fileName: "[project]/src/app/products/singleProduct.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: product.name
            }, void 0, false, {
                fileName: "[project]/src/app/products/singleProduct.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].description,
                children: product.description
            }, void 0, false, {
                fileName: "[project]/src/app/products/singleProduct.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].price,
                children: [
                    (product.price / 100).toFixed(2),
                    " €"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/singleProduct.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$products$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToCartButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: product.id
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/singleProduct.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    userLoggedIn && (product.is_in_fav ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$removeFromFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: product.id
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/singleProduct.tsx",
                        lineNumber: 37,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$addToFavouritesButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        id: product.id
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/singleProduct.tsx",
                        lineNumber: 39,
                        columnNumber: 25
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/products/singleProduct.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, product.id, true, {
        fileName: "[project]/src/app/products/singleProduct.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/carousel/HeroCarousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$singleProduct$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/products/singleProduct.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/products.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function Home() {
    const latestProducts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])().selectFrom("products").selectAll().orderBy("id", "desc").limit(4).execute();
    const productsWithFav = [];
    for (const product of latestProducts){
        const is_in_fav = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInFavourites"])(product.id);
        productsWithFav.push({
            ...product,
            is_in_fav
        });
    }
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].home,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$carousel$2f$HeroCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].latest,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Our latest additions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].productRow,
                        children: productsWithFav.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$products$2f$singleProduct$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                product: product,
                                userLoggedIn: !!user
                            }, product.id, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__87b6e648._.js.map