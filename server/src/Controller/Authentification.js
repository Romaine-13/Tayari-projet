
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

passport.serializeUser(function(user, done) {
  process.nextTick(function() {
    return done(null, user.id);
  });
});

passport.deserializeUser(async function(id, done) {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});
