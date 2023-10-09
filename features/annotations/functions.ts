const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(5, 3));

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void = nothing returned
const logger = (message: string): void => {
  console.log(message);
};

// never = return error (or nothing returned)
const throwError = (message: string): never => {
  throw new Error(message);
};

// error but still return string
const throwErrorString = (message: string): string => {
  if (!message) throw new Error(message);
  return message;
};
// error but still return string (still not return anything)
const throwErrorVoid = (message: string): void => {
  if (!message) throw new Error(message);
};

// Example
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(todaysWeather);

// destructured
const logWeatherDestructed = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
