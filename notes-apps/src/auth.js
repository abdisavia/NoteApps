import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// untuk menambahkan logika pada plaintext password;
import {saltAndHashPassword} from "@/utils/password";
import {getUserFromDB} from "@/utils/users"
import {authConfig} from "./auth.config";

export const { handlers, signIn, signOut, auth} = NextAuth({
    ...authConfig,
    providers:[
        Credentials({
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                let user = null

                console.log(credentials)

                // const pwHash = saltAndHashPassword(credentials.password);

                // user = await getUserFromDB(credentials.email, pwHash);

                // if(!user){
                //     throw new Error("Pengguna tidak ditemukan");
                // }

                // console.log(user);

                return user;
            }
        })
    ],
})