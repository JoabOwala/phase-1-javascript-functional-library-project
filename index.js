function myEach(collection, callback) {
    let originalCollection = [...collection]
    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }
    for (let i = 0; i < originalCollection.length; i++) {
      callback(originalCollection[i])
    }
    return collection
  }
  
  function myMap(collection, callback) {
    let originalCollection = [...collection]
    if ( collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }
    const newCollection = []
    for(let i = 0; i < originalCollection.length; i++) {
      const item = callback(originalCollection[i])
      newCollection.push(item)
    }
    return newCollection
  }
  
  function myReduce(collection, callback, acc) {
    let originalCollection = [...collection]
    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }
    let curr = acc
    if(typeof acc !== "number"){
      curr = originalCollection[0]
      for(let i = 1; i < originalCollection.length; i++) {
        curr = callback(curr, originalCollection[i], originalCollection)
      }
    } else { 
      for(let i = 0; i < originalCollection.length; i++) {
        curr = callback(curr, originalCollection[i], originalCollection)
      }
    }
    return curr
  }
  
  function myFind(collection, predicate) {
    let originalCollection = [...collection]
    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }
    for (let i = 0; i < originalCollection.length; i++) {
      if (predicate(originalCollection[i])) {
        return originalCollection[i]
      }
    }
    return undefined
  }
  
  function myFilter(collection, predicate) {
    let originalCollection = [...collection]
    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }
    const newCollection = []
    for (let i = 0; i < originalCollection.length; i++) {
      if (predicate(originalCollection[i])) {
        newCollection.push(originalCollection[i])
      }
    }
    return newCollection
  }
  
  function mySize(collection) {
    let originalCollection = [...collection]
    if (collection instanceof Array === false) {
      originalCollection = Object.values(collection)
    }
    return originalCollection.length
  }
  
  function myFirst(array, n) {
    if (typeof n !== "number") {
      return array[0]
    } else {
      let newArray = []
      for (let i = 0; i < n; i++){
        newArray.push(array[i])
      }
      return newArray
    }
  }
  
  function myLast(array, n) {
    if (typeof n !== "number") {
      return array[array.length - 1]
    } else {
      let newArray = []
      for (let i = 1; i <= n; i++) {
        newArray.unshift(array[array.length-i])
      }
      return newArray
    }
  }
  
  function myKeys(object) {
    const keysArray = []
    for (let key in object) {
      keysArray.push(key)
    }
    return keysArray
  }
  
  function myValues(object) {
    const valueArray = []
    for (let key in object) {
      valueArray.push(object[key])
    }
    return valueArray
  }