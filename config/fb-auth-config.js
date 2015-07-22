var passport = require('passport');
var passportFb = require('passport-facebook');

function configure() {
    passport.use(new passportFb.Strategy({
            clientID: 'foo',
            clientSecret: 'bar',
            callbackURL: "http://localhost:8080/auth/facebook/callback",
            enableProof: false
        },
        function(accessToken, refreshToken, profile, done) {
            var isAuthorized = [
                    '1534320209', // Daniel Bjerkan
                    '524095630', // Tommy Olsen
                    '10207219534149138' // Øyvind Ødegård
                ].indexOf(profile.id) != -1;
            var err = !isAuthorized ? 'Not allowed' : undefined;
            return done(err, profile);
        }
    ));
}

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = {
    configure: configure
};
