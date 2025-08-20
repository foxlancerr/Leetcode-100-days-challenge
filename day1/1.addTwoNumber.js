// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]

// let l1 = [2, 4, 3],
//   l2 = [5, 6, 4];
// let l3 = [9, 9, 9, 9, 9, 9, 9],
//   l4 = [9, 9, 9, 9];

// var addTwoNumbers1 = function (l1, l2) {
//   // some cases pass and some failed
//   let carry = 0;
//   let result = [];
//   for (i = 0; i < l1.length; i++) {
//     let item = l1[i] + l2[i];
//     result[carry] = item;
//     carry++;
//   }
//   return result;
// };

// console.log(addTwoNumbers(l1,l2))
// console.log(addTwoNumbers(l3,l4))

// way 2 try

// make a List Node

// class ListNode {
//   constructor(val, next = null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next;
//   }
// }

// const convertArrayToNode = (list) => {
//   let dummy = new ListNode(0);
//   let current = dummy

//   for (let i = 0; i < list.length; i++) {
//     dummy.next = new ListNode(list[i])
//     current = current.next

//   }
//   console.log(dummy)
//   return dummy.next;
// };

// const addTwoNumbers = (l1, l2) => {
//   let dummy = new ListNode(0);
//   let current = dummy;
//   let carry = 0;

//   while (l1 !== null || l2 !== null || carry > 0) {
//     x1 = l1.val !== undefined ? l1.val : 0;
//     x2 = l2.val !== undefined ? l2.val : 0;

//     sum = x1 + x2 + carry;
//     carry = Math.floor(sum / 10);

//     current.next = new ListNode(sum % 10);
//     current = current.next;

//     if (l1 !== null) l1 = l1.next;
//     if (l2 !== null) l2 = l2.next;
//   }

//   return dummy.next;
// };

// const node1 = convertArrayToNode(l1)
// const node2 = convertArrayToNode(l2)

// console.log(addTwoNumbers(node1,node2))

// // try 3
// class ListNode {
//   constructor(val, next = null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next;
//   }
// }

// // Convert array into linked list
// const convertArrayToNode = (list) => {
//   let dummy = new ListNode(0);
//   let current = dummy;

//   for (let i = 0; i < list.length; i++) {
//     current.next = new ListNode(list[i]);
//     current = current.next;
//   }

//   return dummy.next; // head of the linked list
// };

// // Convert linked list back to array (for testing)
// const listToArray = (head) => {
//   let result = [];
//   while (head !== null) {
//     result.push(head.val);
//     head = head.next;
//   }
//   return result;
// };

// // Add two numbers represented as linked lists
// const addTwoNumbers = (l1, l2) => {

//   let dummy = new ListNode(0);
//   let current = dummy;
//   let carry = 0;

//   while (l1 !== null || l2 !== null || carry > 0) {
//     let x1 = l1 !== null ? l1.val : 0;
//     let x2 = l2 !== null ? l2.val : 0;

//     let sum = x1 + x2 + carry;
//     carry = Math.floor(sum / 10);

//     current.next = new ListNode(sum % 10);
//     current = current.next;

//     if (l1 !== null) l1 = l1.next;
//     if (l2 !== null) l2 = l2.next;
//   }

//   return dummy.next;
// };

// // Example usage
// const l1 = [2, 4, 3]; // represents 342
// const l2 = [5, 6, 4]; // represents 465

// const node1 = convertArrayToNode(l1);
// const node2 = convertArrayToNode(l2);

// console.log(node1, node2)

// const result = addTwoNumbers(node1, node2);
// console.log(listToArray(result)); // [7, 0, 8] => represents 807

class nodeList {
  constructor(prev, next = null) {
    this.prev = prev !== undefined ? prev : 0;
    this.next = next;
  }
}

const node1 = new nodeList(1);
console.log(node1);

const scienceSubjectMarks = [40, 60, 10];
const artsSubjectMarks = [30, 80, 100];

const convertArrayAtNodeList = (listItem) => {
  let dummy = new nodeList(0);
  let current = dummy;

  for (let i = 0; i < listItem.length; i++) {
    current.next = new nodeList(listItem[i]);
    current = current.next;
  }
  return dummy.next;
};

console.log(convertArrayAtNodeList(artsSubjectMarks));

const artNodeList = convertArrayAtNodeList(artsSubjectMarks);
const scienceNodeList = convertArrayAtNodeList(scienceSubjectMarks);


const addTwoNumbers = (l1, l2) => {
  let dummy = new nodeList(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    let c1 = (l1 !== null) ? l1.prev : 0;
    let c2 = (l2 !== null) ? l2.prev : 0;

    let sum = c1 + c2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new nodeList(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  return dummy.next;
};

console.log(addTwoNumbers(artNodeList,scienceNodeList))



// algoorithm flow understand 
// ***************************************************
// Perfect 👍 Let’s walk through the flow of the algorithm step by step with your input:

// Input
// l1 = [2, 4, 3]   // represents 342
// l2 = [5, 6, 4]   // represents 465


// Important: Digits are stored in reverse order, so the linked list is
// 2 → 4 → 3 (means 342) and 5 → 6 → 4 (means 465).

// We want to compute 342 + 465 = 807,
// but result must also be in reverse order → [7,0,8].

// Algorithm Flow

// Initialization

// dummy = new ListNode(0) (acts as a placeholder start node).

// current = dummy (to build our result list).

// carry = 0.

// First Iteration

// l1.val = 2, l2.val = 5, carry = 0.

// sum = 2 + 5 + 0 = 7.

// carry = Math.floor(7/10) = 0.

// Add new node with 7 → result becomes 7.

// Move l1 → 4, l2 → 6.

// ✅ Result so far: 7.

// Second Iteration

// l1.val = 4, l2.val = 6, carry = 0.

// sum = 4 + 6 + 0 = 10.

// carry = Math.floor(10/10) = 1.

// Add new node with 10 % 10 = 0.

// Move l1 → 3, l2 → 4.

// ✅ Result so far: 7 → 0.

// Third Iteration

// l1.val = 3, l2.val = 4, carry = 1.

// sum = 3 + 4 + 1 = 8.

// carry = Math.floor(8/10) = 0.

// Add new node with 8.

// Move l1 → null, l2 → null.

// ✅ Result so far: 7 → 0 → 8.

// End Condition

// l1 = null, l2 = null, carry = 0.

// Loop ends.

// Return dummy.next (skips the fake 0 node).

// Final Output

// Linked List:

// 7 → 0 → 8


// As an array (for easy reading):

// [7, 0, 8]


// Which represents 807, the correct sum of 342 + 465.

// 👉 In short:

// Add digit by digit.

// Track carry when sum ≥ 10.

// Keep building the result list.

// Stop when both lists and carry are empty.

// Do you want me to also draw a visual diagram of the linked lists at each step (like nodes pointing to each other with arrows), so you can see it like a picture instead of text?