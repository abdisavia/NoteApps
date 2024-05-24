const {PrismaClient} = require('@prisma/client');
var bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const date = Date.now();

async function main() {
    const pass = await bcrypt.hash("abdi",10)
    const admin = await prisma.user.upsert({
        where:{email:"abdi@gmail.com"},
        update:{},
        create:{
            email:"abdi@gmail.com",
            username:"Hyeronemus",
            password: pass
        }
    })
    console.log({admin})
}

main()
    .then(
        async () => {
            await prisma.$disconnect()
        }        
    )
    .catch(
        async (e) => {
            console.log("Error : ", e)
            await prisma.$disconnect();
            process.exit(1)
        }
    )