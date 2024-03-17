const players = require("./data/players");
const generateReferenceId = require("./util/generateReferenceId");

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
console.log(`Unique Reference:`, generateReferenceId());

/**
 *  filter players having score > 30
 */

const filteredPlayers = players.filter((player) => {
  return player.score > 30;
});

console.log(`filtered players`, filteredPlayers);
