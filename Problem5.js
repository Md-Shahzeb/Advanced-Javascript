if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex = 0) {

        let len = this.length;
        let start = Math.max(fromIndex >= 0 ? fromIndex : len + fromIndex, 0);

        for (let i = start; i < len; i++) {
            if (this[i] === element) {
                return true;
            }
        }
        return false;
    };
}

// Testing the customIncludes polyfill
const arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(3)); 
console.log(arr.customIncludes(6)); 
console.log(arr.customIncludes(4, 3)); 
console.log(arr.customIncludes(4, -2)); 
