'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {

    if (!Array.isArray(this) || this.length <= 1) {
      return this;
    }


    const arr = [...this];


    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA < strB) {
        return -1;
      }

      if (strA > strB) {
        return 1;
      }

      return 0;
    };

    const compare =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;


    function quickSort(array, left = 0, right = array.length - 1) {
      if (left >= right) {
        return;
      }

      const pivotIndex = partition(array, left, right);

      quickSort(array, left, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, right);
    }

    function partition(array, left, right) {
      const pivot = array[right];
      let i = left - 1;

      for (let j = left; j < right; j++) {
        if (compare(array[j], pivot) <= 0) {
          i++;
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

      [array[i + 1], array[right]] = [array[right], array[i + 1]];

      return i + 1;
    }


    quickSort(arr);

    for (let i = 0; i < this.length; i++) {
      this[i] = arr[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
