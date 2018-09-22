const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.goooleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accsseToken, refeshToken, profile, done) => {
      const userExist = await User.findOne({ googleId: profile.id });

      if (userExist) {
        return done(null, userExist);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
