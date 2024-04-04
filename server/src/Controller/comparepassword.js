
const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Exemple d'utilisation de la fonction hashPassword pour hacher un mot de passe
const plainPassword = 'monMotDePasse';
const hashedPassword = await hashPassword(plainPassword);
console.log('Mot de passe haché :', hashedPassword);

// Exemple d'utilisation de la fonction comparePasswords pour vérifier un mot de passe
const isMatch = await comparePasswords(plainPassword, hashedPassword);
console.log('Le mot de passe correspond :', isMatch);

module.exports={
  comparePasswords
}