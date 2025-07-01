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

