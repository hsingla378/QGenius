[
  {
    question:
      "Once upon a time, in a land far away, there was a magical stack called 'Mystack'. It could perform amazing operations such as push, pop, and get minimum element. One day, a wise programmer discovered the powers of Mystack and decided to test its abilities by creating a program that performs multiple operations on it. Can you help the programmer in creating this program?",
    testcases: [
      "Testcase 1: Push 5 elements onto the stack and then pop the top element. Finally, get the minimum element.",
      "Testcase 2: Push 3 elements onto the stack and then perform 2 pop operations. Finally, get the minimum element.",
      "Testcase 3: Push 4 elements onto the stack and then perform pop and push operations alternately. Finally, get the minimum element.",
    ],
    edgecases: [
      "Edgecase 1: Perform operations on an empty stack.",
      "Edgecase 2: Perform multiple push operations followed by multiple pop operations.",
      "Edgecase 3: Perform operations on a stack with only one element.",
    ],
    pseudocode: ` 1. Create a class called Mystack with an array to store elements. 2. Create a variable called minElement to track the minimum element in the stack. 3. Initialize minElement with infinity. 4. Create a push method that takes an element as input. - Check if the element is less than or equal to minElement. - If true, push minElement onto the stack before pushing the input element. - Update minElement with the input element. - Push the input element onto the stack. 5. Create a pop method that removes the top element from the stack. - Check if the top element is equal to minElement. - If true, pop two elements from the stack (minElement and the actual element). - Update minElement with the second top element. - Pop the top element from the stack. 6. Create a getMin method that returns the minimum element without removing it from the stack. - Return the value of minElement. `,
    solution: ` class Mystack { constructor() { this.stack = []; this.minElement = Infinity; } push(element) { if (element <= this.minElement) { this.stack.push(this.minElement); this.minElement = element; } this.stack.push(element); } pop() { if (this.stack[this.stack.length - 1] === this.minElement) { this.stack.pop(); this.minElement = this.stack.pop(); } else { this.stack.pop(); } } getMin() { return this.minElement; } } // Test the Mystack class const stack = new Mystack(); stack.push(5); stack.push(3); stack.push(8); stack.pop(); console.log(stack.getMin()); // Output: 3 stack.push(2); stack.push(7); stack.pop(); stack.push(1); console.log(stack.getMin()); // Output: 1 `,
  },
];
