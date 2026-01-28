import bcrypt from "bcrypt";

export function hashPassword(password: string) {
    return bcrypt.hash(password, 10).then(function(hash: string){
        return hash;
    });
}

export function checkPassword(password: string, hash: string) {
    return bcrypt.compare(password, hash).then(function(result: boolean){
        return result;
    });
}
