/**
 * tag function / tagged template literal like styled-components
 */

const name = 'Ahmad Aidil'
const title = 'Husband'

function greet(strings, ...values) {
  let result = ''
  strings.forEach((str, index) => {
    const dynamicVal = typeof values[index] === 'string'
      ? values[index].toUpperCase()
      : values[index] || ''
    result += str + dynamicVal
  });

  return result
}

console.log(
  greet`hai, my name is ${name} and I'am a ${title} and the only ${1} like me`
)
