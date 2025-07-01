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