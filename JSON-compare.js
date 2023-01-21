var isEqualsJson = (obj1, obj2) => {
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    //return true when the two json has same length and all the properties has same value key by key
    return keys1.length === keys2.length && Object.keys(obj1).every(key => obj1[key] == obj2[key]);
}



let a = { name: 'aamir', age: '24' }
let b = { age: '24', name: 'aamir' }

JSON.stringify(a) === JSON.stringify(b)

console.log(isEqualsJson(a, b))