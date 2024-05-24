import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";


const authConfig = {
    secret:"F7mLye3p8GMXjif8QL2ty5vxlsMj27at4huuB9MIfOI=",
    pages:{
        signIn:"/pages/Auth",
        error:"/pages/Auth"
    },
    session:{
        strategy:"jwt",
    },
    providers:[
        CredentialsProvider({
            type:"credentials",
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials){
                try{
                    // let user = null;
                    // console.log(credentials)
                    // user = await fetch('http://localhost:3000/api/users',{
                    //     method:"POST",
                    //     headers:{
                    //         "Content-Type":"application/json",
                    //     },
                    //     body:JSON.stringify({
                    //         email:credentials.email,
                    //         password:credentials.password
                    //     })
                    // })
                    // console.log(user);

                    // if(!user){
                    //     throw new Error("User not found");
                    // }
                    return credentials;
                }catch(e){
                    throw new Error(e);
                }
            }
        })
    ],
}
export const {handlers,signIn,signOut} = NextAuth(authConfig)
 