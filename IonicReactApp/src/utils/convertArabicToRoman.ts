import {isOperator} from '.';
import {arabicNumDict} from '../constants';

const convertNumFromArabicToRoman = (givenNum: number) => {
  if (!givenNum && givenNum !== 0) {
    return '';
  }

  if (!Number.isInteger(givenNum)) {
    return {errorMsg: 'Roman number can only be integer'};
  }

  if (givenNum <= 0 || givenNum > 3999) {
    return {
      errorMsg: `Roman number can only in the following range: 0 < n < 3999`,
    };
  }

  let givenNumStr = givenNum.toString();

  let pointer = givenNumStr.length - 1;
  let counter = 1;
  let ans = '';

  while (pointer >= 0) {
    const currentDigit = givenNumStr[pointer];

    let romanCharToBeAdded;
    if (currentDigit === '4') {
      romanCharToBeAdded =
        arabicNumDict[counter * 1] + arabicNumDict[counter * 5];
    } else if (currentDigit === '9') {
      romanCharToBeAdded =
        arabicNumDict[counter * 1] + arabicNumDict[counter * 10];
    } else if (Number(currentDigit) >= 5) {
      romanCharToBeAdded =
        arabicNumDict[counter * 5] +
        arabicNumDict[counter * 1].repeat(Number(currentDigit) - 5);
    } else {
      romanCharToBeAdded = arabicNumDict[counter * 1].repeat(currentDigit);
    }
    ans = romanCharToBeAdded + ans;

    pointer--;
    counter *= 10;
  }

  return ans;
};

const convertExpFromArabicToRoman = (givenExp: string) => {
  let expArr: any[] = [];
  let numStr: string = '';

  for (let i = 0; i < givenExp.length; i++) {
    if (!isOperator(givenExp[i]) || givenExp[i] === '.') {
      numStr += givenExp[i];
    } else {
      if (numStr.length > 0) {
        expArr.push(Number(numStr));
        numStr = '';
      }
      expArr.push(givenExp[i]);
    }
    if (i === givenExp.length - 1 && numStr.length > 0) {
      expArr.push(Number(numStr));
    }
  }

  for (let i = 0; i < expArr.length; i++) {
    if (!isOperator(expArr[i])) {
      expArr[i] = convertNumFromArabicToRoman(expArr[i]);
      if (expArr[i].errorMsg) {
        return {
          errorMsg: expArr[i].errorMsg,
        };
      }
    }
  }
  return expArr.join('');
};

export {convertNumFromArabicToRoman, convertExpFromArabicToRoman};
