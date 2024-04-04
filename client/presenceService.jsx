import axios from 'axios';

// Service pour créer une présence
export const createPresence = async (presence) => {
  const userId = parseInt(presence.userId);
  const locationId = parseInt(presence.locationId);

  try {
    const response = await axios.post('http://localhost:8000/presence', {
      userId: userId,
      locationId: locationId
    });
    return response.data;
  } catch (error) {
    console.error('Error creating presence:', error);
    throw error;
  }
};

// Fonction pour gérer la requête POST de la présence
const postPresence = async (req, res) => {
  try {
    const presenceData = req.body;
    console.log("req.body", req.body);
    const presence = await createPresence(presenceData);
    return res.status(200).json({ message: 'Tu as signé ta présence avec succès', presence: presence });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la signature de la présence.' });
  }
};

module.exports = { postPresence };
