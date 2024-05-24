# OA's Node.js Dog

我的看門狗 🐶


## 說明
很簡單就是一個 Watch 機制。

## 安裝

```shell
npm install @oawu/dog
```

## 使用

引入 `require('@oawu/dog')` 即可使用 **dog** 功能，如下範例：

```javascript

  const Dog = require('@oawu/dog')

  const dog = Dog().bite(food => {
    // 當小狗咬到東西時，即可取出食物
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
    .then(results => dog.eat(results)) // 餵給小狗食物
    .catch(dog.eat)
```
