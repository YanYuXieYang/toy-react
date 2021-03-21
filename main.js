/*
 * @Author: your name
 * @Date: 2021-03-21 11:31:06
 * @LastEditTime: 2021-03-21 14:30:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toy-react\main.js
 */
for (let i of [1, 2, 3]) {
  console.log(i);
}

function createElement (tagName, attributes, ...children) {
  var e = document.createElement(tagName);
  for (let p in attributes) {
    e.setAttribute(p, attributes[p]);
  }
  for (let child of children) {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    e.appendChild(child);
  }
  return e;
}

window.a = <div id='a' class='c' >
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>

document.body.appendChild(<div id='a' class='c' >
  <div>x</div>
  <div>y</div>
  <div>z</div>
</div>);