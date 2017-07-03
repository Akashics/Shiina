exports.name = "anime";
exports.run = (client, message, args) => {

  const MAL = require('mal-api');
  const config = require('../config.json');

  const mal = new MAL(config.MyAnimeListID, config.MyAnimeListSecret, 'true');

  mal.account.verifyCredentials()
    .then(res => console.log(res))
    .catch(err => done(err));

}