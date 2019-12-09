export default function numberOrNot(quantity) {
  try {
    if (Number.isNaN(Number(quantity))) {
      throw new Error(`Error in type of input ${quantity}`);
    }
    return Number(quantity);
  } catch (error) {
    return (`${error}`);
  }
}
