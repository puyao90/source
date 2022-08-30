var head = null;
// head = { data: 5, next: null };
head = new LLNode(5); //LLNode { data: 5, next: null }
head.next = new LLNode(10); //LLNode { data: 5, next: LLNode { data: 10, next: null } }
head.next.next = new LLNode(5);
head.next.next.next = new LLNode(1);
head.next.next.next.next = new LLNode(2);
console.log(head);
// console.log(head.data);
// console.log(head.next);

console.log(searchLL(head, 5));
console.log(numberLL(head, 5));

function LLNode(data) {
  this.data = data;
  this.next = null;
}

//To search a linked list we need to traverse the list; this is done by updating the value of a temporary pointer
//(called temp) to be the value of the next pointer as we go along the list.

function searchLL(head, item) {
  var temp = head;
  while (temp !== null) {
    if (temp.data === item) {
      return true;
    }
    temp = temp.next;
  }
  return false;
}

function numberLL(head, item) {
  var temp = head;
  var count = 0;
  while (temp !== null) {
    if (temp.data === item) {
      count += 1;
    }
    temp = temp.next;
  }
  return count;
}
