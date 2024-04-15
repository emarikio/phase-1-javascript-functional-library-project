function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    }else {
        for (const key in collection) {
            callback(collection[key], key, collection)

        }
    }
    return collection
}

function myMap(collection, callback) {
    const newArray = [];
    myEach(collection, function (value, key, collection) {
        newArray.push(callback(value, key, collection));
    });
    return newArray;
}
function myReduce (collection, callback, acc) {
    myEach(collection, function (value, key, collection) {
        if (acc === undefined) {
            acc = value;
        }else {
            acc = callback(acc, value, collection);
        }
    });
    return acc;
}
function myFind(collection, predicate) {
    let found;
    myEach(collection, function (value, key, collection) {
        if (predicate(value, key, collection)) {
            found = value;
            return;
        }
    });
    return found;
}
function myFilter(collection, predicate) {
    const newArray = [];
    myEach(collection, function (value, key, collection) {
        if (predicate(value, key, collection)) {
            newArray.push(value);
        }
    });
    return newArray;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(array, n = 1) {
    if (n === 1) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n = 1) {
    if (n === 1) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}
function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}