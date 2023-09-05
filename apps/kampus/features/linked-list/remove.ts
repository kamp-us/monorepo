/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head, n) {
  if (!head) {
    return null;
  }

  let length = 1;
  let current = head;
  while (current && current.next) {
    length++;
    current = current.next;
  }

  const index = length - n;

  let result = head;
  for (let i = 0; i < index; i++) {
    result = result.next;
  }

  return result;
}
