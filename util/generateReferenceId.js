const crypto = require("crypto");

const generateReferenceId = () => {
  return crypto.createHash("md5").digest("hex");
};

module.exports = generateReferenceId;
