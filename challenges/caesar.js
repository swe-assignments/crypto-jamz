/*
The Caesar Shift is produced by rotating the alphabet and swapping the letters of the original message with the rotated alphabet.
If the key is 2, then the original and rotated alphabets are

abcdefghijklmnopqrstuvwxyz
CDEFGHIJKLMNOPQRSTUVWXYZAB

so a becomes C and b becomes D and so on.

Use `npm run test:caesar` in the terminal to test your solutions
*/


/**
 * Encrypts a msg using the caesar cypher
 * @param {string} msg - the original text in lowercase
 * @param {number} key - the amount by which to rotate the alphabet
 * @returns {string} the encrypted text in UPPERCASE
 */
function caesarEncode (msg, key) {
  // write a function to encode the msg using the caesar cyhper with given key and return it in UPPERCASE
}

/**
 * Decrypts a message which was encrypted using the caesar cypher
 * @param {string} cyp - a message in UPPERCASE which has been encrypted using the caesar cypher 
 * @param {number} key - the key which was used to encrypt the message
 * @returns {string} the decrypted (original) text in lowercase
 */
function caesarDecode (cyp, key) {
  // write a function which decrypts the cyp into lowercase
}

module.exports = { caesarEncode, caesarDecode }
