/*let rgx1 = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
console.log(rgx1.test("msdaledad@gmail.com"));
let rgx2 = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
console.log(rgx2.test("{}.{}.``@444.333.88.333"));
let rgx3 = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
console.log(rgx3.test("msdaledad@gmail.com"));
let rgx4 = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
console.log(rgx4.test("http://yipee.com"));
let rgx5 = new RegExp(/^My (best|worst) experience$/i);
console.log(rgx5.test("My Worst experience"));
console.log(rgx5.test("My Best experience"));
console.log(rgx5.test("My favorite experience"));
let rgx6 = new RegExp(/^[a-z0-9\\]*$/);
console.log(rgx6.test("9\\"));*/

// sample multiline text
let str = "This is a string\nThis is another string";
// finds the first instance of "string"
console.log(('(1) ' + str).replace(/string/, "blob"));
// finds the last instance of "string" using anchor $
console.log(('(2) ' + str).replace(/string$/, "blob"));
// finds the first instance of "string" using anchor $ and multiline flag
console.log(('(3) ' + str).replace(/string$/m, "blob"));
// finds both instances of "string" using anchor $, multiline flag, and global flag
console.log(('(4) ' + str).replace(/string$/mg, "blob"));
// same as previous but uses mismatching case and ignore case flag
console.log(('(5) ' + str).replace(/STRING$/mgi, "BLOB")); // finds first and last instance of "string"
// replaces all text from first "string" and on due to Dot All (s) flag
console.log(('(6) ' + str).replace(/STRING.*/mgis, "BLOB"));

// New sample multiline text
str = "This is a string\nThis is another string with a unicode ✧ character";
// does NOT find the unicode character...no changes made
console.log(('(7) ' + str).replace(/\u{2727}/, "DIAMOND"));
// finds the unicode character with the help of the unicode (u) flag
console.log(('(8) ' + str).replace(/\u{2727}/u, "DIAMOND"));

// Sticky flag test...using same sample multiline text
let rgx = new RegExp(/string/y);
// set search index (lastIndex) to 10...the position of the first instance of "string"
rgx.lastIndex = 10;
console.log(`(9) Search is ${rgx.test(str)}... Found at index 10 => ${str.substring(10)}`);
// set search index (lastIndex) to 33...the position of the second instance of "string"
rgx.lastIndex = 33;
console.log(`(10) Search is ${rgx.test(str)}... Found at index 33 => ${str.substring(33)}`);


