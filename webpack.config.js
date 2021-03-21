/*
 * @Author: your name
 * @Date: 2021-03-21 11:25:58
 * @LastEditTime: 2021-03-21 12:16:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toy-react\webpack.config.js
 */
module.exports = {
  entry: {
    main: "./main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,//正则表达式，所有以.js结束的文件都应有babel-loader
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]]
          }
        }
      }
    ]
  },
  mode: "development",
  optimization: {
    minimize: false
  }
}