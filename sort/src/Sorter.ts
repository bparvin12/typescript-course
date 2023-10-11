export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// Abstract Class
/* 
  cant be used to create an object directly
  only used as a parent class for
  can contain real implementation for some methods
  implemented methods can refer to other methods that dont actually exist yet
  can make child classes promise to implement some other method
*/
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    // bubble sort for array of numbers
    // only run if array of numbers
    // instanceOf : array, object, date, etc
    // narrow down every other value other than number, string, boolean, symbol

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
