import {CURRENCY_TYPE} from '../constants';

const UAH = 'UAH';

export default ({currencyOf, currencyIn, inputOf, inputIn, lastChanged}) => {
  let result = 0;
  const of = 1 / currencyOf?.rate ?? 0;
  const to = 1 / currencyIn?.rate ?? 0;

  if (lastChanged === CURRENCY_TYPE[0]) {
    if (currencyIn.cc === UAH) {
      result = currencyOf.rate * inputOf;
    } else if (currencyOf.cc === UAH) {
      result = (1 / currencyIn.rate) * inputOf;
    } else {
      result = (to / of) * inputOf;
    }
  } else if (lastChanged === CURRENCY_TYPE[1]) {
    if (currencyIn.cc === UAH) {
      result = (1 / currencyOf.rate) * inputIn;
    } else if (currencyOf.cc === UAH) {
      result = currencyIn.rate * inputIn;
    } else {
      result = (of / to) * inputIn;
    }
  }

  return [lastChanged, result.toFixed(2)];
};
