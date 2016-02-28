const emoji = require("../lib");

console.log(emoji.getName("😍"));
// heart_eyes

console.log(emoji.getUnicode("heart_eyes"));
// 😍

console.log(emoji.unicode);
// [ '💯',
//   '🔢',
//   ...
//   '🇪🇭',
//   '🇾🇪',
//   '🇿🇲',
//   '🇿🇼',
//   'null' ]

console.log(emoji.names);
// [ '100',
//   '1234',
//   'grinning',
//   'rage4',
//   ...
//   'suspect',
//   'hurtrealbad' ]
