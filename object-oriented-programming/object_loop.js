let memberArray = ['egoing', 'graphittie', 'leezhce'];


console.group('array loop');

for(let i = 0; i<memberArray.length; i++) {
    console.log(`memberArray[${i}]:`,memberArray[i]);
}

console.groupEnd('array loop');


let memberObject = {
    manger: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}

console.group('object loop');


for(let name in memberObject) {
    console.log(name, memberObject[name]);
}


console.groupEnd('object loop');