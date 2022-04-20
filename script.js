// Numbers
// 1, 10, -100, 25.5
// BigInt 2^53 2^-53

// let num = 1000
// let str = '1000'
// 1e3
// 1000000000 === 1e9
// 0.000001 === 1e-6

// toString(base)
// console.log(typeof num)
// console.log(num.toString())
// console.log((102).toString())

// Math - об'єкт з властивостями та методами
// const pi = Math.PI
// console.log(pi)

// Округлення
// Math.floor - завжди округлює до меншого
// console.log(Math.floor(3.9))
// console.log(Math.floor(-2.1))

// Math.ceil - завжди округлює до більшого
// console.log(Math.ceil(3.9))
// console.log(Math.ceil(-2.9))

// Math.round - до ближнього
// console.log(Math.round(3.1))
// console.log(Math.round(3.5))

// Math.trunc - забирає дробове (не підтримується в IE)
// console.log(Math.trunc(3.2))
// console.log(Math.trunc(3.9))
// console.log(Math.trunc(-2.3))
// console.log(Math.trunc(-2.9))

// toFixed(n) - return string
// 12.332398473289348
// const num = 12.342398473289348
// console.log(typeof +num.toFixed(1))

// 0.1 + 0.2 = 0.3
// 0.1 + 0.2 === 0.3 - true
// console.log(+(0.1 + 0.2).toFixed(2))
// console.log(+(0.1 + 0.2).toFixed(2) === 0.3)

// 0 || -0
// Infinity - безкінечність
// NaN - помилка

// console.log(Number('16a')) // NaN
// isNaN
// console.log(isNaN(16)) // false
// console.log(isNaN('16')) // false
// console.log(isNaN('16str')) // true
// console.log(isNaN(NaN)) // true

// console.log('NaN', Number('16a') === NaN) // DON'T DO THIS, DON'T WORK

// parseInt, parseFloat
// console.log(Number('100px')) // NaN

// console.log(parseInt('100px')) // 100
// console.log(parseInt('15.5px')) // 15
// console.log(parseFloat('15.5px')) // 15.5
// console.log(parseFloat('15.234.5.5.5.5')) // 15.234

// console.log(parseFloat('a100')) // NaN

// Math.random - від 0 до 1
// console.log(Math.round(Math.random() * 100))  0 - 100

// Math.max / Math.min
// console.log(Math.max(2,6,4,5,6,7,23, 103, 343, 205, 112))
// console.log(Math.min(-4,2,6,4,5,6,7,23, 103, 343, 205, 112))

// Math.pow
// console.log(Math.pow(2, 10))
// console.log(2**2)

// Math.sqrt
// console.log(Math.sqrt(121))

// Math.abs
// console.log(Math.abs(-10))

// console.log(0.3 / 0.1) // 2.99999999

// let i = 0
//
// while (i < 11) {
//   i += 0.2
//   console.log(i)
//   if (i > 9.8 && i < 10.2) break
// }

// console.log(i)