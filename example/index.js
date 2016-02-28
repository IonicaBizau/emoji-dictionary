const emoji = require("../lib");

console.log(emoji.getName("😍"));
// heart_eyes

console.log(emoji.getUnicode("heart_eyes"));
// 😍

console.log(emoji.unicode);
// [ '💯',
//   '🔢',
//   '😀',
//   '😬',
//   '😁',
//   '😂',
//   '😃',
//   '😄',
//   ...
//   '🇿🇲',
//   '🇿🇼' ]

console.log(emoji.names);
// [ '100',
//   '1234',
//   'grinning',
//   'grimacing',
//   'grin',
//   ...
//   'ye',
//   'zm',
//   'zw' ]
