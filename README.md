# seo-friendly-urls

The "seo-friendly-urls" package is a utility that helps convert strings to SEO-friendly URLs by removing special characters and stop words.

## Installation

You can install the package using npm:

```
npm install seo-friendly-urls
```

## Usage

To use the "seo-friendly-urls" package, require it in your JavaScript file:

```
const seoFriendlyUrls = require('seo-friendly-urls');

const input = 'This is a test string!';
const output = seoFriendlyUrls(input);
console.log(output);
// Output: "this-is-test-string"
```

The main function provided by the package is `seoFriendlyUrls`. It takes an input string and returns a SEO-friendly URL.

## How it works

The `seoFriendlyUrls` function performs the following transformations on the input string:

* **Removes special characters**: Special characters such as symbols and punctuation marks are removed from the string.
* **Removes stop words**: Common stop words, such as articles and conjunctions, are removed from the string.
* **Converts spaces to hyphens**: Any remaining spaces in the string are replaced with hyphens (-).
* **Converts to lowercase**: The resulting string is converted to lowercase.

By applying these transformations, the package generates SEO-friendly URLs that are cleaner and more digestable.
