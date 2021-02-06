var myObj = {
    
    foo : "bar",
    name : "peter",
    func: function() {
        var self = this;
        // console.log("this:",this);
        // console.log("self:",self);
        // console.log("outer func: this.name = ",  this.name);
        // console.log("outer func: self.name = ",  self.name);
        console.log("outer func: this.foo = ",  this.foo);
        console.log("outer func: self.foo = ",  self.foo);

        (function(){
            console.log("inside: ",this);
            console.log("inner func: this.foo = ",  this.foo);
            console.log("inner func: self.foo = ", self.foo);
        }());
    }
};

myObj.func();