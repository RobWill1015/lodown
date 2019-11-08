'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to accept any value and return that value unchanged.
 * 
 * @param {any type} value: The value to be returned
 * @return {any type}: The input value
 */
 function identity(value){
     return value;
 }
 module.exports.identity = identity;

 
 /**
  * typeOf: Designed to take a value and return the type of data type it is
  * 
  * @param {any type} value: value to determine the type
  * @return {string}: a string of what data type was evaluated
  *
  * possible data types :
  *     string
  *     array
  *     undefined
  *     null
  *     object
  *     number
  *     function
  */
  function typeOf (value) {
    if (typeof(value) === 'string') {
        return 'string';
    } else if (typeof(value) === 'boolean') {
        return 'boolean';
    } else if (typeof(value) === 'number') {
        return 'number';
    } else if (typeof(value) === 'undefined') {
        return 'undefined';
    } else if (typeof(value) === 'function') {
        return 'function';
    } else if (typeof(value) === 'object') {
        if (value === null) {
            return 'null';
        } else if (value instanceof Date === true) {
            return 'date';
        } else if (Array.isArray(value) === true) {
            return 'array';
        } else return 'object';
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to return the first elements from an array.
 * 
 * @param {array} array: an array to get elements from
 * @param {number} num: the number of elements to get from the array
 * 
 * @return {array}: If array was not found, an empty array will return. If num
 * is not given, the first element from the array will be return into array. Otherwise, 
 * the first number of items will be returned.
 */
 
 
 function first(array, number) {
   var holder = [];
   if (Array.isArray(array) === false) {
       return holder;
   }
   else if (typeof number !== 'number') {
       return array[0];
   }
   else if (number > array.length) {
       return array;
   }
   else {
       for (var i = 0; i < number; i++){
           holder.push(array[i]);
       }
   }
   return holder;
}
module.exports.first = first;
 
 /**
  * last: Designed to return the last elements from an array
  * 
  * @param {array} array: an array to get elements from
  * @param {nuber} number: the number of elements to get from the array
  * 
  * @return {array}: If array was not found, an empty array will return. If num
  * is not given, the first element from the array will be returned into array. Otherwise,
  * the first number of items will be returned
  */
  
function last(array, number){
    let holder = [];
    if (Array.isArray(array) === false) {
        return holder;
    }
    else if (typeof number !== 'number') {
        return array[array.length - 1];
    }
    else if (number > array.length) {
        return array;
    }
    else if (number < 0) {
        return holder;    
    }
    else {
        for (let i = number -1; i < array.length; i++) {
            holder.push(array[i]);
        }
    }
    return holder;
}
module.exports.last = last;
 
/**
 * indexOf: Designed to return the index of an element from an array.
 * 
 * @param {array} array: an array to iterate through
 * @param {any type} value: will find out the index spot of this value
 * 
 * @return {number}: the index spot of the value from the array, -1 if value is 
 * not in array.
 */ 
 
function indexOf (array, value) {
for(var i = 0; i < array.length; i++){
    if (array[i] === value ) {
        return i;
    } 
    }
    return -1; 
}
module.exports.indexOf = indexOf;
 
/**
 * contains: Designed to return true if an array contains a value, otherwise returns false
 * 
 * @param {array} array: an array to check for a value
 * @param {any type} value: the value to check inside array for
 * 
 * @return {boolean}: true if the array contains the value, otherwise false
 */
 
 function contains (array, value){
      if(!value) {
          return false;
      }
      return array.includes(value) ? true : false;
}
module.exports.contains = contains;
 
/**
 * unique: Designed to evaluate an array and return an array without the duplicates
 * 
 * @param {array} array: the input array to remove duplicates from
 * 
 * @return {array}: the input array without duplicates
 */

function unique (array) {
  var removed = [];
  for(var i = 0; i < array.length; i++){
      if(indexOf(array, array[i]) === i) {
          removed.push(array[i]);
      }
  }
  return removed;
}
module.exports.unique = unique;
 
/**
 * filter: Designed to filter values from a collection based on a test function. Takes an array
 * and passes each value through a test function. The test function returns true if the value passes 
 * the test, otherwise false. Values that fail the test are returned in an output array.
 * 
 * @param {array} array: the array to filter through
 * @param {function} test: this function will test the values in the array and return
 * a boolean value based on the logic of the test
 * 
 * @return {array}: an array containing the filtered collection values that passed
 * the test. 
 * 
 */
 
 function filter (array, test){
  let filtered = [];
  each(array, function(element, index, array) {
      if(test(element, index, array)) {
          filtered.push(element);
      }
  });
  return filtered;
}
module.exports.filter = filter;

/**
 * reject: Designed to filter values from a collection based on a test function. 
 * This is a logical inverse of the filter function. 
 * 
 * @param {array} array: the array to filter through
 * @param {functon} test: this function will test the values in the array and return
 * a boolean value based on the logic of the test
 * 
 * @return {array}: an array containing the filtered collection values that passed
 * the test.
 * 
 * */


function reject (array, test) {    
    var falseArr = [];
    filter(array, function(element, index, arr) {
        if(!(test(element, index, arr))) {
            falseArr.push(element);
        }
    });
    return falseArr;
}
module.exports.reject = reject;

/**
 * partition: Designed to filter an array based on a test and return two arrays; one
 * containing elements that pass the test and one containing elements that fail the 
 * test. 
 * 
 * @param {array} array: array to apply test function on.
 * @param {function} func: The function is applied to each value in the collection. The 
 * test function must return a boolean based on logic for the value given to it.  
 */
 
 function partition (array, func){
    var pass = [];      
    var fail = [];      
        each(array, function(value, key, array) {
            (func(value, key, array) ? pass : fail).push(value); 
        });
        return [pass, fail];    
 }
module.exports.partition = partition;

 /**
  * map: Designed to loop over a collection, array or object and apply a function
  * to each element of the collection, save the result of each function call in an
  * array and return the resulting array. 
  * 
  * @param {array or object} collection: the collection to loop over
  * @param {function} func: the function to apply to each element of the collection.
  * 
  * @return {array}: an array containing the restults of each function call.
  * 
  */
 
 
 function map (collection, func) {
    var mapResults = [];
        each(collection, function(value, index, collection) { 
            mapResults.push(func(value, index, collection));  
        });
        return mapResults;
}
module.exports.map = map;

/**
 * pluck: Designed to loop over an array of objects and, for each object, pull 
 * out the property value of the provided property key and store them in an 
 * array to be returned.
 * 
 * @param {array} array: an array of objects
 * @param {string} property: the property to pull out from each object
 * 
 * @return {array}: an array containging the value of property for each object in array
 * 
 */

function pluck (array, property) {
    let propVal = [];
    map(array, function(value, index, array) {
        propVal.push(array[index][property]);
    });
    return propVal;
}
module.exports.pluck = pluck;
 
 
 /**
  * every: Designed to loop through a collection, array, or object and return true
  * if every element in the collection passes a test function, false if not.
  * 
  * @param {array or object} collection: collection to apply test function to 
  * @param {function} action: the function to be applied to each value in the collection.
  * The test function must return a boolean based on some logic which tests the value
  * given to it.
  * 
  * @return {boolean}: true if every element in the collection passes the test function,
  * false otherwise. If no test function is provided, every will return true if all values
  * are truthy, false otherwise. 
  * 
  */
 
 function every (collection, action) {
    var newArray = [];
    var count = 0;
    if (action === undefined) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i]) {
                count += 1;
                }
        }
        return (count === collection.length) ? true : false;
    }
    for (var x in collection) {
        newArray.push(action(collection[x], x, collection));
    }
    for (var j = 0; j < newArray.length; j++) {
        if (newArray[j]) {
            count += 1;
        }
    }
    return (count === newArray.length) ? true : false;
}
module.exports.every = every;
 
 /**
  * some: Designed to loop through a collection, array or object and return true
  * if at least one element in the collection passes a test function, false if not.
  * 
  * @param {array or object} collection: collection to apply the test function to
  * @param {function} action: The function to be applied to each value in the collection.
  * The test function must return a boolean based on some logic which tests the value
  * given to it. 
  * 
  * @return {boolean}: true if at least one element in the collection passes the test function, 
  * false otherwise. If no test function is provided, some will return true if at least
  * one value is truthy, false otherwise.
  * 
  */
 
 function some (collection, action) {
    if(action === undefined) {
        for(var i = 0; i < collection.length; i++) {
            return (collection[i]) ? true : false;
            }
    }  
    if (typeof(action) === undefined && typeof(action) === "boolean") {
        if (action) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        var newArray = [];
        var count = 0;
        for (var x in collection) {
            newArray.push(action(collection[x], x, collection));
        }
        for (var j = 0; j < newArray.length; j++) {
            if (newArray[j]) {
                count += 1;
            }
        }
        return (count > 0) ? true : false;
    }
}
module.exports.some = some;

/**
 * reduce: Designed to loop over an array and call a function on every element passing the
 * arguments: previous result, element, index. The returned value of function is used
 * as the previious result for the next iteration. A seed is used on the first interation
 * as the previous result. The final result is then returned. 
 * 
 * @param {array} array: array to reduce
 * @param {function} action: the function to be applied to each value in the collection. The
 * function taeks 3 arguments: previous result, element, index and returns a new value to be
 * used as previous result.
 * @param {any type} seed: the first value used as previous result
 * 
 * @return {any type}: the final result of reducing the array.
 * 
 */


function reduce (array, action, seed) {
    var result;
    if(seed === undefined) {
        seed = array[0] / 10;
    }
    for(var i = 0; i < array.length; i++) {
        if(i === 0) {
            result = action(seed, array[i], i);
        } else {
            result = action(result, array[i], i);
        }
    }
    return result;
}
module.exports.reduce = reduce;

/**
 * extend: Designed to copy the propertied from one or more objects into another object.
 * 
 * @param {object} object1: the object to add all other object properties to
 * @param {object} objects: the objects whose properties will be added to object1
 * 
 * @return {object}: object1 with properties from other objects added 
 */

 function extend (object1, ...objects) {
        each(objects, function(object, key, objects) {
            for (var key in object) {
                object1[key] = object[key];
            }
        });
        return object1;
    }
 module.exports.extend = extend;
 