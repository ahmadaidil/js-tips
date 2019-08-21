/*
** swap variables without using any temporary variable
*/

function swap(a, b) {
  [b, a] = [a, b]
  console.log('a', a)
  console.log('b', b)
}

swap('haha', 'hehe')

/*
** only for integers
*/

function swapIntOnly(a, b) {
  a = a ^ b
  b = a ^ b
  a = a ^ b

  console.log('a', a)
  console.log('b', b)
}

swapIntOnly(1, 2)
