/*
 * @Author: your name
 * @Date: 2021-03-21 11:31:06
 * @LastEditTime: 2021-03-21 15:22:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toy-react\main.js
 */
import { createElement, Component, render } from "./toy-react.js"
class MyComponent extends Component {
  constructor(type) {

  }
  setAttribute (name, value) {

  }
  appendChild () {

  }
  render () {
    return <div></div>
  }
}

render(<MyComponent id='a' class='c' >
  <div>x</div>
  <div>y</div>
  <div>z</div>
</MyComponent>, document.body);