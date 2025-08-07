import { handlers } from "@/auth";
// import { hash } from "bcrypt";

export const {GET,POST} = handlers;


// export async function saltAndHashPassword(plainPass) {
//     const saltRounds = 10;
//     return await hash(plainPass, saltRounds);
// }