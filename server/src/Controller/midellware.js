// const bcrypt = require('bcrypt');

// const hashPassword = async (password) => {
//   const saltRounds = 10;
//   return await bcrypt.hash(password, saltRounds);
// };

// module.exports = {
//   hashPassword
// };

const jwt = require('jsonwebtoken');
// / Function to generate a JWT
function generateJWT(user) {
  // JWT payload containing user information
  const payload = {
    matricule: matricule,
    email: email,
    password:password
  }
  const options = {
    expiresIn: '1h',
  };
  const token = jwt.sign(payload, secretKey, options);
  return token;
}

// Function to verify a JWT
function verifyJWT(token) {
  try {
    // Verify the JWT using the secret key
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    // If the token is invalid or expired, an error will be thrown
    console.error('JWT verification failed:', err.message);
    return null;
  }
  
}

// Example usage:
const userToken = generateJWT(sampleUser);
console.log('Generated JWT:', userToken);

const decodedToken = verifyJWT(userToken);
if (decodedToken) {
  console.log('Decoded JWT payload:', decodedToken);
}
