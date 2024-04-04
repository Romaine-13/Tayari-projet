
// import des modules
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtOptions = require('../../config');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// import de la configuratio

// import du client Prisma


// Configuration de la stratégie JWT
passport.use(new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
  try {
    // Récupérer l'utilisateur à partir du JWT payload
    const user = await prisma.user.findUnique({
      where: {
        id: jwtPayload.userId,
      },
    });
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'utilisateur :', error);
    return done(error, false);
  }
}));

// Initialiser Passport
passport.initialize();

// Fonction pour générer un JWT
function generateJWT(user) {

  const payload = {
  matricule: user.matricule,
    email: user.email,
    password: user.password,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Fonction pour vérifier un JWT
function verifyJWT(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.error('La vérification du JWT a échoué :', err.message);
    return null;
  }
}



// affichage de l'utilisateur

const getAllUsers= async()=>{
  return await prisma.user.findMany()
  
}
const getUser = async (req, res) => {
  passport.authenticate('jwt', { session: false })
  try {
    const users = await getAllUsers();
    res.status(200).json({ message: 'bon', users: users });

  } catch (error) {
    res.status(500).send("une erreur est survenue lors de la récupération des utilisateurs");

  }
}
const CreateUser= async(user)=>{
      return await prisma.user.create({
          data: user
      })
  }
 async function postUser(req, res) {
  try {
    const userData = req.body
    console.log("req.body", req.body);
    const user= await CreateUser(userData)
    const token = generateJWT(user);

    return res.status(200).json({ message: 'Utilisateur créé avec succès.', user: user, token: token });
    }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la création de l\'utilisateur.' });
  }
}


const loginUser = async (req, res) => {
  const { matricule, email, password } = req.body;

  const existingUser = await prisma.user.findUnique({
    where: {
      matricule: matricule,
      email: email,
    },
  });

  if (!existingUser) {
    return res.status(401).json({ error: 'Matricule ou email incorrect.' });
  }

  const payload = {
    matricule: existingUser.matricule,
    email: existingUser.email,
    password: existingUser.password,
  };

  const token = generateJWT(payload);
  const passwordMatch = verifyJWT(token);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Mot de passe incorrect.' });
  }
  
    const redirectUrl = '/location'
    res.status(200).json({ message: 'Connexion réussie.', token: token,redirectUrl });
   
  };
 
  const modifyUser = async(userId,data)=>{
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
    const data = req.body;
    const result = await modifyUser(userId, data);
    res.status(200).json({ message: 'Utilisateur modifié avec succès !', user: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur est survenue lors de la modification de l'utilisateur." });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);
    const existingUser = await prisma.user.findUnique({ where: { id: userId } });

    if (!existingUser) {
      throw new Error("L'utilisateur à supprimer n'existe pas.");
    }

    const deletedUser = await prisma.user.delete({ where: { id: userId } });
    res.status(200).json({ message: 'Utilisateur supprimé avec succès', user: deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "L'utilisateur à supprimer n'existe pas." });
  }
};

module.exports = { postUser, updateUser, getUser, deleteUser, loginUser, getAllUsers };
