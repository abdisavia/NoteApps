import { AuthConstraint } from "./validation"
import { AuthError } from 'next-auth';
import { signIn, signOut } from '@/auth';
import { loginSchema } from '@/types/schema';

const defaultValues = {
    email:"",
    password:"",
};

export async function login(prevState, formData){
    try{
        const email = formData.get('email');
         const password = formData.get('password');

//   const validatedFields = loginSchema.safeParse({
//    email: email,
//    password: password,
//   });

//   if (!validatedFields.success) {
//    return {
//     message: 'validation error',
//     errors: validatedFields.error.flatten().fieldErrors,
//    };
//   }

        await signIn('credentials', formData);

        return {
        message: 'success',
        errors: {},
        };
    } catch (error) {
        console.log(error);
//   if (error instanceof AuthError) {
//    switch (error.type) {
//     case 'CredentialsSignin':
//      return {
//       message: 'credentials error',
//       errors: {
//        ...defaultValues,
//        credentials: 'incorrect email or password',
//       },
//      };
//     default:
//      return {
//       message: 'unknown error',
//       errors: {
//        ...defaultValues,
//        unknown: 'unknown error',
//       },
//      };
//    }
//   }
//   throw error;
}
}

// export const SignInValidate = async (formData) => {
//     const user = await isUserExist()
//     if(user) return {status : false, message:"email tersebut sudah terdaftar"}
//     const message = validate({email : formData.get("email"), password : formData.get("password")},AuthConstraint);
//     return {status:true, message:message}
// }


// export async function isUserExist(formData) {
//     const user = await prisma.user.findMany({
//         where:{
//             email: formData.get("email"),
//         }
//     })
//     if(user)return true;
//     return false;
// }