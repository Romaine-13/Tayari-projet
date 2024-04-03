// Exemple d'utilisation de Prisma pour l'authentification
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findOne({ where: { email, password } });
  if (user) {
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Incorrect email or password' });
  }
});


