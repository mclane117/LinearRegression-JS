// Function to calculate the sum of an array
function sum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// Function to calculate the sum of the product of two arrays
function sumProduct(arr1, arr2) {
  return arr1.reduce((acc, val, i) => acc + val * arr2[i], 0);
}

// Function to calculate the sum of squares of an array
function sumOfSquares(arr) {
  return arr.reduce((acc, val) => acc + val * val, 0);
}

// Linear regression function to compute slope (m) and intercept (b)
function linearRegression(xValues, yValues) {
  const n = xValues.length; // Number of data points

  // Calculating the sums required for the linear regression formula
  const sumX = sum(xValues); // Sum of x values
  const sumY = sum(yValues); // Sum of y values
  const sumXY = sumProduct(xValues, yValues); // Sum of the products of x and y values
  const sumXSquare = sumOfSquares(xValues); // Sum of the squares of x values

  // Calculate the slope (m) using the linear regression formula
  const slope = (n * sumXY - sumX * sumY) / (n * sumXSquare - sumX ** 2);

  // Calculate the intercept (b) using the linear regression formula
  const intercept = (sumY - slope * sumX) / n;

  // Return the slope and intercept
  return { slope, intercept };
}

// Example data points (x, y)
const xValues = [1, 2, 3, 4, 5];
const yValues = [2, 4, 5, 4, 5];

// Call the linearRegression function with the example data
const result = linearRegression(xValues, yValues);

// Output the result
console.log(`Slope (m): ${result.slope}`);
console.log(`Intercept (b): ${result.intercept}`);
