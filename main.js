const players = require("./data/players");

/**
 *  Find player with a given id
 */
const playerId = 2;
const player = players.find((player) => {
  return player.id === playerId;
});

/**
 *  Update player's current score having id 2 to 92
 */

player["score"] = 92;
console.log(`Updated player`, player);
console.log(`Players updated`, players);
