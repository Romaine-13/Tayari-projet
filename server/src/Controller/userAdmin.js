// // const { PrismaClient } = require('@prisma/client');
// // const prisma = new PrismaClient();
// const {PrismaClient} = require('@prisma/client');
// const prisma   = new PrismaClient();
// const {user}=require('../Model/user.js')



const {PrismaClient} = require('@prisma/client');
const prisma   = new PrismaClient();


const getAllUsers= async()=>{
  return await prisma.user.findMany()
  

}

const getUser=async (req, res)=>{
try {
  const users= await getAllUsers()
  res.status(200).json({message:'bon',users:users})
  
} catch (error) {
  res.status(500).send("une erreur est survenue lors de la récupération des utilisateurs")
  
}
}



const CreateUser= async(user)=>{
      return await prisma.user.create({
          data: user
      })
  }
 async function PostUser(req, res) {
  try {
    const userData = req.body
    console.log("req.body", req.body);
    const user= await CreateUser(userData)
      return res.status(200).json({ message: 'Utilisateur créé avec succès.',user: user });
    }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la création de l\'utilisateur.' });
  }
}
// la modification de l'utilisateur
const ModifyUser = async(userId,data)=>{
  return await prisma.user.update({
    where: { 
      id: userId
    },
    data:data
})
}
const updateUser = async (req, res) => {
      try {
        const userId = parseInt(req.params.id, 10);
        const data= req.body;
        console.log("req.body", req.body);
        
        const result= await ModifyUser(userId,data);
          res.status(200).json({ Message: 'Utilisateur modifié avec succès !', user: result });
      } catch (error) {
          console.error(error);
          res.status(500).json({ Message: 'Une erreur est survenue lors de la modification de l\'utilisateur.' });
      }
  }
  const supprimUser = async(userId,data)=>{
    const existingUser = await prisma.user.findUnique({ where: { id: userId } });
    if (existingUser) {
      const deletedUser = await prisma.user.delete({ where: { id: userId } });
      return deletedUser;
  }else {

    throw new Error('L\'utilisateur à supprimer n\'existe pas.');
  }
  }

const deleteUser = async (req, res) => {

  try {
    const userId = parseInt(req.params.id, 10);
  
    console.log("req.body", req.body);
    
    const result= await supprimUser(userId);
      res.status(200).json({ Message: 'Utilisateur supprimé avec succès',res});
  } catch (error) {
      console.error(error);
      res.status(500).json({ Message: 'L\'utilisateur à supprimer n\'existe pas.'});
  }
}




module.exports = { PostUser,updateUser,getUser,deleteUser}