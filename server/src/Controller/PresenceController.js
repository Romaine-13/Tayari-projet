const {PrismaClient} = require('@prisma/client');
const prisma   = new PrismaClient();


// const getAllPresence= async()=>{
//     return await prisma.user.findMany()
//   }
  
//   const getPresence=async (req, res)=>{
//   try {
//     const users= await getAllUsers()
//     res.status(200).json({message:'bon',users:users})
    
//   } catch (error) {
//     res.status(500).send("une erreur est survenue lors de la récupération des utilisateurs")
    
//   }
//   }


const CreatePresence= async(presence)=>{
 
    return await prisma.presence.create({
        data: presence
    })
}

async function PostPresence(req, res) {
try {
  const userData = req.body
  console.log("req.body", req.body);

  const user= await CreatePresence(userData)
    return res.status(200).json({ message: 'tu as signé ta presence avec succés',presence: presence });
  }
catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Une erreur est survenue lors de la signature de la presence.' });
}
}
module.exports={PostPresence}
