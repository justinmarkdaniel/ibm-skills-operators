// Practice Task: Testing variable reassignment inside and outside block scope

{
    // Declare variables inside block
    let blockLet = "Initial let value";
    const blockConst = "Initial const value";
    var blockVar = "Initial var value";

    // Try to reassign within the block
    blockLet = "Reassigned let inside block"; // Works fine
    // blockConst = "Trying to reassign const"; // ERROR: Assignment to constant variable
    blockVar = "Reassigned var inside block"; // Works fine

    console.log("Inside block:");
    console.log("blockLet:", blockLet);
    console.log("blockConst:", blockConst);
    console.log("blockVar:", blockVar);
}

console.log("\nOutside block:");
// Try to access variables outside the block
console.log("blockVar:", blockVar); // Works - var is function/global scoped, not block scoped
// console.log("blockLet:", blockLet); // ERROR: ReferenceError - let is block scoped
// console.log("blockConst:", blockConst); // ERROR: ReferenceError - const is block scoped

// Try to reassign outside the block
blockVar = "Reassigned var outside block"; // Works fine
console.log("blockVar after reassignment:", blockVar);
// blockLet = "Trying to reassign let outside"; // ERROR: ReferenceError
// blockConst = "Trying to reassign const outside"; // ERROR: ReferenceError
