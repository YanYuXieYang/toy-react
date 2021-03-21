/*
 * @Author: your name
 * @Date: 2021-03-21 15:15:58
 * @LastEditTime: 2021-03-21 17:03:17
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
  constructor(content) {
    this.root = document.createTextNode(content)
  }
}

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }
  setAttribute (name, value) {
    this.props[name] = value;
  }
  appendChild (component) {
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
  if (typeof type === "string") {
    e = new ElementWrapper(type);
  } else {
    e = new type;
  }

  for (let p in attributes) {
    e.setAttribute(p, attributes[p]);
  }
  let insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === "string") {
        child = new TextWrapper(child);
      }
      if ((typeof child === "object") && (child instanceof Array)) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    }
  }
  insertChildren(children);
  return e;
}

export function render (component, parentElement) {
  parentElement.appendChild(component.root);// 成功执行过一次。后来还是报错
}