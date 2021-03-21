/*
 * @Author: your name
 * @Date: 2021-03-21 11:31:06
 * @LastEditTime: 2021-03-21 22:27:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toy-react\main.js
 */
import { createElement, Component, render } from "./toy-react.js"
class MyComponent extends Component {
  render () {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

render(<MyComponent id='a' class='c' >
  <div>x</div>
  <div>y</div>
  <div>z</div>
</MyComponent>, document.body);