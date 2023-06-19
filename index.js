const removeSpecialCharacters = (str) => {
  return str.replace(/[^\w\s-]/g, '').trim();
};

const removeStopWords = (str) => {
  const stopWords = ['a', 'an', 'and', 'the', 'but', 'or', 'for', 'of', 'to', 'in', 'on', 'with', 'is', 'are'];
  const words = str.split(' ');
  const filteredWords = words.filter((word) => !stopWords.includes(word.toLowerCase()));
  return filteredWords.join(' ');
};

const seoFriendlyUrls = (str) => {
  // Remove special characters
  let result = removeSpecialCharacters(str);

  // Remove stop words
  result = removeStopWords(result);

  // Convert spaces to hyphens and lowercase the string
  result = result.replace(/\s+/g, '-').toLowerCase();

  return result;
};

module.exports = seoFriendlyUrls;
