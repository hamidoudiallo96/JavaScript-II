// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let sum = () => {
    let a = 25;
    let b = 19;
    let num_2 = () => {
        return a+b;
    };
    return num_2()
};


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let counter =( function() {
  // Return a function that when invoked increments and returns a counter variable.
    let counter_num = 0;
    function increase(val) {
        return counter_num=+val;
    };
    return{
        increment: function(){
            increase(1)
        },
        increment: function(){
            increase(2)
        },

        value: function increase(){
            return counter_num;
        }
    }
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.increment()
counter.increment()
console.log(counter.value());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
        const counterFactory = () => {
        function increase(val) {
            return counter_num=+val;
        };
        return{
            increment: function(){
                increase(1)
            },
            increment: function(){
                increase(2)
            },

            decrement: function(){
                increase(-2);
            };

            value: function increase(){
                return counter_num;
            }
        }
    })();

