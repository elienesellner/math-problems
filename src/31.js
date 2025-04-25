function getRandomInteger(minValue, maxValue) {
  const value = Math.random() * (maxValue - minValue + 1);
  return Math.floor(value);
}
