# end hook after webpack is done

## install

```bash
npm i log-webpack-plugin --D
```

## use
```js
  const logWebpackPlugin = require('log-webpack-plugin') 

  module.exports = {
    plugins: [
      new logWebpackPlugin(() => {
        console.log('emit 事件发生啦，所有模块的转换和代码块对应的文件已经生成好~')
      } , () => {
        console.log('done 事件发生啦，成功构建完成~')
      })
    ]
  }
```