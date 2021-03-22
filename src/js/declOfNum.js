const ARR_Year = ['год', 'года', 'лет'];

export function declOfNum(number) {
    let cases = [2, 0, 1, 1, 1, 2];
    return ARR_Year[
      number % 100 > 4 && number % 100 < 20 ?
      2 :
      cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }