import { z } from "zod";

export const SignupSchema = z.object({
    email: z
        .email({ error: "email tidak valid" }).trim(),
    username: z
        .string()
        .min(2, { error: "username harus memiliki minimum 2 huruf" }),
    password: z
        .string()
        .min(8, { error: "pastikan password memiliki 8 karakter" })
        .regex(/[A-Z]/, { error: "Pastikan terdapat salah satu huruf besar" })
        .regex(/[0-9]/, { error: "Pastikan password menggandung nomor" })
        .regex(/^[^<>\/\\|`~]*$/, { error : "password tidak boleh menggandung <>/\\|`~"})
        .trim(),
    confirmationPassword: z
        .string()
})
    .refine((data) => data.password === data.confirmationPassword, {
        error: "Konfirmasi password harus sama dengan password",
        path: ["confirmationPassword"]
    })

export const SigninSchema = z.object({
    email: z
        .email()
        .trim(),
    password: z
        .string()
        .min(8, { error: "pastikan password memiliki 8 karakter" }),
})