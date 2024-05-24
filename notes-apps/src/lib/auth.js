// import NextAuth from 'next-auth';
// import { authConfig } from '../../auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import { PrismaClient } from '@prisma/client';
// import { z } from 'zod';
// import bcript from 'bcrypt';

// async function getUser(email,password){
//     const prisma = new PrismaClient();
//     const user = prisma.user.findMany({
//         where:{
//             email:email,
//         },
//         include:{
//             category,
//             notes
//         }
//     })
//     return user;
// }

// export const {auth,signIn,signOut} = NextAuth({
//     ...authConfig,
//     providers:[
//         Credentials({
//             async authorize(credentials){
//                 const parsedCredentials = z
//                     .object({ email: z.string().email(), password: z.string().min(6) })
//                     .safeParse(credentials);
//                 if(parsedCredentials.success){
//                     const {email,password} = parsedCredentials.data;
//                     const user = await getUser(email);
//                     if(!user)return null;
//                     const passwordMatch = await bcript.compare(password,user[0].password);
//                     if(passwordMatch) return user[0];
//                 }
//                 console.log("Credential Failed")
//                 return null
//             }
//         })
//     ]
// })