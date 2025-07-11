const nums = [1,2,3,4,5];

Array.prototype.myMap = function (callback, args) {
    const result = [];
    let index = 0, len = this.length;

    while(index < len) {
        this[index] = callback.call(args, this[index], index, this);
        index++;
    }
    return result;
}

const mapOutput = nums.myMap(function (e) { return e * this.pol * 2 }, {pol: 10});



Array.prototype.myFilter = function (callback, args) {
    const result = [];
    let index = 0, len = this.length;

    while (index < len) {
        if (callback.call(args, this[index], index, this)) {
            result.push(this[index]);
            index++;
        }
    }

    return result;
}

const filterOutput = nums.myFilter(function(e) { return e > 4});



Array.prototype.myReduce = function(callback, init, args) {
    let acc = init;
    let index = 0, len = this.length;
    
    while(index < len) {
        acc = callback.call(args, acc, this[index], index, this);
        index++;
    }
    return acc;
}

const reduceOutput = nums.myReduce((acc, e) => acc + e, 0)

const myObj = {
    a: 100,
    b: 200
}

function greet(a,b) {
    console.log(`${this.a} with ${this.b} | ${a} with ${b}`)
}

Function.prototype.myCall = function(context, ...args) {
    context._this = this;
    const result = context._this(...args);
    delete context._this;
    return result;
}

Function.prototype.myBind = function(context ={}, ...args) {
    context._this = this;
    return function () {
        const result = context._this(...args);
        return result;
    }
}

const a = greet.myBind(myObj, 10,20);
a()

