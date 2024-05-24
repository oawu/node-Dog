/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2022, @oawu/dog
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

const Dog = require('./index.js')

const dog = Dog().bite(food => {
  console.error(food)
})

Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(_ => resolve(1), 1000)
  }),
  new Promise((resolve, reject) => {
    setTimeout(_ => resolve(2), 1200)
  }),
])
  .then(dog.eat)
  .catch(dog.eat)