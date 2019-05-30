var person = {
  firstName: 'Bob',  // <= property containing data
  lastName:  'Smith' // <= ditto
}

console.log(person.firstName);
// or ...
console.log('Hello, ' + person.firstName + ' ' + person.lastName);

console.log('************');


var person = {
  firstName: 'Bob',
  lastName:  'Smith',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Nice, now I can just say:
console.log('Hello, ' + person.fullName());
// And it's much "cleaner" every time I need their full name!