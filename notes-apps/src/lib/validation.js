export const AuthConstraint = {
    email: {
        email:{
            message:"Harap masukkan email"
        },
        presence: true,
        exclusion: {
          within: ["admin@gmail.com"],
          message: "'%{value}' is not allowed"
        }
      },
      password: {
        presence: true,
        length: {
          minimum: 6,
          message: "must be at least 6 characters"
        }
      }
}