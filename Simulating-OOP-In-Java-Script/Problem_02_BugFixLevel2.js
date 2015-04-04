function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullName =  this._firstName + " " + this._lastName;

    Object.defineProperty(this, 'firstName', {
            get: function() {
                return this._firstName;
            },
            set: function(value) {
                this._firstName = value;
                this._fullName = this._firstName + " " + this._lastName;
            }
        });
    
    Object.defineProperty(this, 'lastName', {
            get: function() {
                return this._lastName;
            },
            set: function(value) {
                this._lastName = value;
                this._fullName = this._firstName + " " + this._lastName;
            }
        });

    Object.defineProperty(this, 'fullName', {
            get: function() {
                return this._fullName ;
            },
            set: function(value) {
                this._fullName = value;
                var names = value.split(" ");
                this._firstName = names[0];
                this._lastName = names[1];
            }
        });
}
var person = new Person("Peter", "Jackson");

//console.log(person.firstName);
//console.log(person.lastName);
//console.log(person.fullName);

//person.firstName = "Michael";
//console.log(person.firstName);
//console.log(person.fullName);
//person.lastName = "Williams";
//console.log(person.lastName);
//console.log(person.fullName);

person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

