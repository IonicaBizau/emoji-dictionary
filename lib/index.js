const unicodeMap = require("emoji-unicode-map")
    , nameMap = require("emoji-name-map")
    , emojiNames = require("emoji-names")
    , emojiChars = require("emoji-chars")
    ;

const dict = module.exports = {};

/**
 * getName
 * Gets the name of the unicode emoji.
 *
 * @name getName
 * @function
 * @param {String} unicodeChar The emoji unicode character.
 * @return {String} The emoji name.
 */
dict.getName = function (unicodeChar) {
    return unicodeMap.get(unicodeChar);
};

/**
 * getUnicode
 * Gets the unicode character by providing the emoji name.
 *
 * @name getUnicode
 * @function
 * @param {String} name The emoji name.
 * @return {String} The emoji unicode character.
 */
dict.getUnicode = function (name) {
    return nameMap.get(name);
};

dict.emoji = {
    names: emojiNames
  , chars: emojiChars
};
