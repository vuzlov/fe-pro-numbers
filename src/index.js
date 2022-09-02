/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
    let multiplication = Math.min(minFirst, minSecond) * Math.max(maxFirst, maxSecond);
    return multiplication;
};

/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
export const getSquareOfCircle = (radius) => {
    let square = Math.PI * (radius**2);
    return square;
};

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
export const getFixedValue = (number, accuracy) => {
    let rounding = Math.round(number * (10**accuracy))/(10**accuracy);
    return rounding;
};

/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */
export const getFlooroCeil = (number) => {
    const num = Math.trunc(number)%2;
    if (num === 0){
        let res = Math.floor(number);
        return res;
    } if (num === 1) {
        let res = Math.ceil(number);
        return res;
    }
   
};

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {
    let rando = from - 0.5 + (Math.random() * (to-from+1));
    return Math.round(rando);
};
