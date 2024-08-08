function Calculator() {
    this.result = 0;

    this.add = function(number) {
        this.result += number;
        return this; 
    };

       this.subtract = function(number) {
        this.result -= number;
        return this; 
    };

    
    this.multiply = function(number) {
        this.result *= number;
        return this; 
    };

   
    this.divide = function(number) {
        if (number !== 0) {
            this.result /= number;
        } else {
            console.error("Error: Division by zero");
        }
        return this; 
        };

    
    this.getResult = function() {
        return this.result;
    };
}

const calc = new Calculator();
const result = calc.add(10).subtract(2).multiply(3).divide(4).getResult();

console.log(result); 
