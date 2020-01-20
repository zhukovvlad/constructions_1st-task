// TODO: write your code here
import isItNumber from './isItNumber';

const paragraf = document.getElementsByTagName('p')[0];
paragraf.textContent = isItNumber('1q2w3e4r');

console.log(Number('1q2w3e4r'));
