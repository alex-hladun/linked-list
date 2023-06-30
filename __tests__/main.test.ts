import { LinkedList } from '../src/main.js';

describe('Linked list test', () => {
  it('correctly traverses a linked list', () => {
    const l = new LinkedList<string>();

    l.insertAtEnd('a');
    l.insertAtEnd('b');
    l.insertAtEnd('c');

    l.getHead();
    console.log(l.getHead());
    l.traverseOne();

    expect(l.getHead()).toBeTruthy();
    expect(l.getHead().data).toBe('b');
  });

  it('correctly returns size of linked list', () => {
    const l = new LinkedList<string>();

    l.insertAtEnd('a');
    l.insertAtEnd('b');
    l.insertAtEnd('c');

    expect(l.size()).toBe(3);
  });
});
