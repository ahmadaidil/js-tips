const arr = [
  'hahahaha',
  true,
  '',
  null,
  1,
  undefined
]

/**
 * remove all falsy values (null, empty string, undefined) from an arr
 * instead using arr.filter(el => el)
 */

console.log(arr.filter(Boolean))
