const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// array of strings within array
const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// prevent incomptabile values
// carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// type infereses date or string already 
const importantDates = [new Date(), '2030-10-10'];

// type only infers date, but we also want to delcare it can be string as well
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10');
// error
// importantDates2.push(12);

