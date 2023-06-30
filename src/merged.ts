/* eslint-disable @typescript-eslint/explicit-function-return-type */

function swap(items, leftIndex, rightIndex) {
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)]; //middle element
  let i = left; //left pointer
  let j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

export function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

const items = [5, 3, 0, 0, 0, 7, 6, 2, 9];
const items2 = [5, 66, 3, 22, 1, 3, 44, 1, 0, -2, -3, -4];
const combined = [...items, ...items2];
const sortme = quickSort(combined, 0, combined.length - 1);
console.log('🚀 ~ file: merged.ts:17 ~ sortme:', sortme);
