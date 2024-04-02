
const updateUser = async (req, res) => {
    const userId = req.params.id; // Récupère l'ID de l'utilisateur à partir des paramètres de la requête
    const upuser = req.body; // Récupère les données de l'utilisateur à mettre à jour depuis le corps de la requête
  
    try {
      // Utilise la méthode `update` de Prisma Client pour mettre à jour l'utilisateur
      const updatedUser = await prisma.upuser.update({
        where: { id: userId }, // Utilise l'ID récupéré pour spécifier l'utilisateur à mettre à jour
        data: { user: upuser }, // Spécifie les nouvelles données de l'utilisateur à mettre à jour
      });
  
      res.status(200).json({ Message: 'Modification réussie !', user: updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: 'Une erreur est survenue lors de la mise à jour de l\'utilisateur.' });
    }
  };