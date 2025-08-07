import { z } from "zod";

export const SignupSchema = z.object({
    email: z
        .email({ error: "email tidak valid" }).trim(),
    password: z
        .string()
        .min(8, { error: "pastikan password memiliki 8 karakter" })
        .regex(/[A-Z]/, { error: "Pastikan terdapat salah satu huruf besar" })
        .regex(/[0-9]/, { error: "Pastikan password menggandung nomor" })
        .trim(),    
})