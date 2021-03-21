/*
 * @Author: your name
 * @Date: 2021-03-21 15:15:58
 * @LastEditTime: 2021-03-21 15:34:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \toy-react\toy-react.js
 */
class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute (name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild (component) {
    this.root.appendChild(component.root)
  }
}
class TextWrapper {
  constructor(conent) {
    this.root = document.createTextNode(content)
  }
  appendChild () {

  }
}

class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }
  setAttribute (name, value) {
    this.props[name] = value;
  }
  appendChild () {
    this.children.push(component);
  }
  get root () {
    if (!this._root) {
      this._root = this.render().root;
    } else {
      return this._root;
    }
  }
}

export function createElement (type, attributes, ...children) {
  let e;
  if (typeof type === 'string') {
    e = document.createElement(type);
  } else {
    e = new type;
  }

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

export function render (component, parentElement) {

}