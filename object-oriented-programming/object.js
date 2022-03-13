let memberArray = ['egoing', 'graphittie', 'leezhce'];

console.log('memberArray[1]:',memberArray[1]);

let memberObject = {
    manger: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}

memberObject.designer = 'leezche';

console.log('memberObject.designer:',memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);


delete memberObject.manger;

console.log('after memberObject.manger:', memberObject.manger);