// interface: creates a new type, describing the 
// property names and value types of an object

interface VehicleBase {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  } 
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`
  }
}

// before interface
// const printVehicleBase = (vehicleBase: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicleBase.name}`);
//   console.log(`Year: ${vehicleBase.year}`);
//   console.log(`Broken: ${vehicleBase.broken}`);
// };

// printVehicleBase(oldCivic);

// after interface
const printVehicleBase = (vehicleBase: VehicleBase): void => {
  console.log(`Name: ${vehicleBase.name}`);
    console.log(`Year: ${vehicleBase.year}`);
    console.log(`Broken: ${vehicleBase.broken}`)
};
printVehicleBase(oldCivic);


const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);

printSummary(drink2);





