const obj = {
  name: 'Ahmad Aidil',
  info: {
    gender: 'Male',
    status: 'Married',
    titles: ['Husband', 'Web Developer', 'Fullstack Engineer']
  }
}

const {
  name,
  info: {
    gender,
    status,
    titles: [husband, ...titles]
  }
} = obj

console.log(name)
console.log(gender)
console.log(status)
console.log(husband)
console.log('other titles', titles)
