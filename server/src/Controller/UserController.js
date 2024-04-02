// // const { PrismaClient } = require('@prisma/client');
// // const prisma = new PrismaClient();
// const {PrismaClient} = require('@prisma/client');
// const prisma   = new PrismaClient();
// const {user}=require('../Model/user.js')



// // la function d'affichage 

// const getUser = async (req, res) => {
//     const users = req.params.id
//     await prisma.users.findMany()
//     res.status(200).json(users)
// }

// //  la creation d'un compte 


// // function de la suppression d'un compte  ;

// const deleteUser = async (req, res) => {
//     const userId = req.params.id;
//     try {
//         await prisma.compte.delete({
//             where: { id: userId }

//         });

//         res.status(200).json({ Message: 'Utilisateur supprimé avec succès !' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ Message: 'Une erreur est survenue lors de la suppression de l\'utilisateur.' });
//     }
// };

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

    return await prisma.user.delete({
      where: { 
        id: userId
      },
      data:data
  })
  }

const deleteUser = async (req, res) => {

  try {
    const userId = parseInt(req.params.id, 10);
    const data= req.body;
    console.log("req.body", req.body);
    
    const result= await supprimUser(userId,data);
      res.status(200).json({ Message: 'Utilisateur modifié avec succès !', user: result });
  } catch (error) {
      console.error(error);
      res.status(500).json({ Message: 'Une erreur est survenue lors de la modification de l\'utilisateur.' });
  }
}




module.exports = { PostUser,updateUser,getUser,deleteUser}