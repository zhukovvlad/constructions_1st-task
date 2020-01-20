export default function isItNumber(quantity) {
  try {
    if (Number.isNaN(parseInt(Number(quantity), 10))) {
      throw new Error(`Error in type of input ${quantity}`);
    }
    return parseInt(quantity, 10);
  } catch (error) {
    return (`${error}`);
  }
}
