module.exports = () => {
  return {
    name: 'watch',
    extend(poi) {
      poi.cli.registerCommand('watch', 'Run app in watch mode', () => {
        const compiler = poi.createCompiler()
        compiler.watch({}, err => {
          if (err) {
            console.error(err)
          }
        })
      })
    }
  }
}
