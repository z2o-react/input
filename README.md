# input

React input component

[![](https://img.shields.io/npm/v/@z2o/input.svg)](https://www.npmjs.com/package/@z2o/input)
[![](https://img.shields.io/npm/dm/@z2o/input.svg)](https://www.npmjs.com/package/@z2o/input)
[![](https://img.shields.io/github/license/z2o-react/input.svg)](https://github.com/z2o-react/input/blob/master/LICENSE)

## Install

```bash
$ npm install @z2o/input
```

## Usage

```javascript
import Input from '@z2o/input'

const c = <Input>default</Input>
React.render(c, container)
```

## Example

online example: [https://z2o-react.github.io/input/](https://z2o-react.github.io/input/)

## API

| name         | type                | default     | description                  |
| ------------ | ------------------- | ----------- | ---------------------------- |
| prefixCls    | string              | `z2o-input` | 自定义类名前缀               |
| className    | string              | -           | 自定义额外类名               |
| style        | Object              | -           | 添加额外样式                 |
| size         | string              | `medium`    | `large` 、`small`            |
| defaultValue | string              | -           | 输入框默认内容               |
| value        | sting               | -           | 输入框内容                   |
| disable      | Boolean             | `false`     | 是否禁用状态                 |
| placeholder  | string              | -           | 输入框占位文本               |
| allowClear   | Boolean             | `false`     | 显示清除按钮                 |
| prefix       | string \| ReactNode | -           | 带有前缀图标的 input         |
| suffix       | string \| ReactNode | -           | 带有后缀图标的 input         |
| addonAfter   | string \| ReactNode | -           | 带标签的 input，设置后置标签 |
| addonBefore  | string \| ReactNode | -           | 带标签的 input，设置前置标签 |
| autoFocus    | Boolean             | `false`     | 自动 focus                   |
| onChange     | function(e)         | -           | 输入框内容变化时的回调       |
| onPressEnter | function(e)         | -           | 按下回车的回调               |

Input 的其他属性和 React 自带的 [input](https://facebook.github.io/react/docs/events.html#supported-events) 一致。

## License

@z2o/input is released under the MIT license.
