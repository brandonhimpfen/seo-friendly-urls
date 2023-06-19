const seoFriendlyUrls = require('./index');

// Test cases
const testCases = [
  'This is a test string!',
  'Hello, world!@#$%^&*',
  'MixedCaseString',
  // Add more test cases as needed
];

// Run tests
testCases.forEach((input, index) => {
  const output = seoFriendlyUrls(input);
  console.log(`Test case ${index + 1}:`);
  console.log('Input:', input);
  console.log('Output:', output);
  console.log('------------------------');
});
