import { validate } from "validate.js"
import { AuthConstraint } from "./validation"


export const SignInValidate = async (formData) => {
    const user = await isUserExist()
    if(user) return {status : false, message:"email tersebut sudah terdaftar"}
    const message = validate({email : formData.get("email"), password : formData.get("password")},AuthConstraint);
    return {status:true, message:message}
}


export async function isUserExist(formData) {
    const user = await prisma.user.findMany({
        where:{
            email: formData.get("email"),
        }
    })
    if(user)return true;
    return false;
}