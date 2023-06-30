import { LinkedList } from '../src/main.js';

describe('Linked list test', () => {
  it('correctly traverses a linked list', () => {
    const l = new LinkedList<string>();

    l.insertAtEnd('a');
    l.insertAtEnd('b');
    l.insertAtEnd('c');

    const t = l.traverse();
    console.log(t);

    const hasA = l.search(() => true);
    expect(hasA).toBeTruthy();
  });
});
