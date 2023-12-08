# Binary Search

## Notes

- Binary Search technique works only on sorted arrays. (both SORTED and ARRAY words are very important)
- It works on divide and conquer approach. (each iteration it divides the array into half)

## Algorithm

1. Get the middle element of the array and compare it with the target value.
2. the target value is equal to the middle element of the array, then return the index of the middle element.
3. If not, then compare the middle element with the target value,
4. If the target value is greater than the number in the middle index, then pick the elements to the right of the middle index,
5. Else, pick the elements to the left of the middle index.
6. Repeat this until we find the number.
7. If the target value is not found in the array, then return -1

## Time Complexity

- Worst Case: O(log2(n))
- Average Case: O(log2(n))
- Best Case: O(1)
