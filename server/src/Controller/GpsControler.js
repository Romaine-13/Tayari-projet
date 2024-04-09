// const companyLatitude = 48.8566;
// const companyLongitude = 2.3522;
// const marginOfError = 0.01; // Marge d'erreur acceptable en degrés

// try {
//     // Vérifier la correspondance des coordonnées
//     if (Math.abs(latitude - companyLatitude) <= marginOfError &&
//         Math.abs(longitude - companyLongitude) <= marginOfError) {
//       console.log('Localisation correspondante');
//       res.sendStatus(200);
//     } else {
//       console.log('Localisation non correspondante');
//       res.status(400).send('Localisation non correspondante');
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// const { latitude, longitude } = req.body;
// try {
//   const location = await prisma.location.create({
//     data: {
//       latitude,
//       longitude
//     }
//   });
//   console.log(`Location saved: ${location.latitude}, ${location.longitude}`);
//   res.sendStatus(200);
// } catch (err) {
//   console.error(err);
//   res.status(500).send('Internal Server Error');
// }

const {PrismaClient} = require('@prisma/client');
const prisma   = new PrismaClient();
const geolib = require('geolib');

const companyLocation = { latitude: 48.8566, longitude: 2.3522 };
const maxDistance = 5; // Distance maximale acceptable en mètres

const location = async (latitude, longitude) => {
  const latitudeFloat = parseFloat(latitude);
  const longitudeFloat = parseFloat(longitude);

  return await prisma.location.create({
    data: {
      latitude: latitudeFloat,
      longitude: longitudeFloat
    }
  });
};

const getLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;
    const distance = geolib.getDistance(
      { latitude, longitude },
      companyLocation
    );

    // Vérifier si la distance est inférieure à la distance maximale acceptable
    if (distance <= maxDistance) {
      console.log('Localisation correspondante');
      console.log("req.body", req.body);

      const user = await location(latitude, longitude); // Passer latitude et longitude
      res.status(200).json({ message: 'tu as signé ta presence avec succès', dataLocation: { latitude, longitude } });
    } else {
      console.log('Localisation non correspondante');
      res.status(400).send('Localisation non correspondante');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur du serveur');
  }
};

module.exports = { getLocation };