class LogWebpackPlugin {

  constructor(doneCallback, emitCallback) {
    this.emitCallback = emitCallback
    this.doneCallback = doneCallback   
  }

  apply(compiler) {
    // compiler.plugin('emit', () => {
    //   this.emitCallback()
    // })
    // compiler.plugin('done', () => {
    //   this.doneCallback()
    // })
    compiler.hooks.emit.tap('LogWebpackPlugin', () => {
      this.emitCallback()
    })
    compiler.hooks.done.tap('LogWebpackPlugin', () => {
      this.doneCallback()
    })
  }
}

module.exports = LogWebpackPlugin