// ES6 "Computed Property Names" feature allows you to have an expression
// (a piece of code that results in a single value like a variable or 
// function invocation) be computed as a property name on an object.

// BEFORE Computed Property Names
// 1. create the object
// 2. use bracket notation to assign that property to the value

function objectify (key, value) {
    let obj = {}
    obj[key] = value
    return obj
}

objectify('name', 'Adriano')

// AFTER CPN
// use object literal notation to assign the expression as a property on 
// the object

function objectifyCpn (key, value) {
    return {
        [key]: value
    }
}

objectifyCpn('name', 'Adriano')
