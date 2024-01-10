const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
 // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "c++", "python"] // array ki nhi keys hoti h or bydefault numbers hoti h
for (const key in programming) {
 //console.log(programming[key]);  
// ******** o/p: js
//  c++
//  python
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
   //console.log(map[key]);  
   // o/p: kuch nhi aayega kyonki map iteratable nhi h...uske liye kuch or method hoti h
}