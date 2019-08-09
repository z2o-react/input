import * as React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { Omit } from 'utility-types'

export interface IInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  prefixCls?: string
  className?: string
  style?: React.CSSProperties
  size?: 'large' | 'normal' | 'small'
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  allowClear?: boolean
}

export default class Input extends React.Component<IInputProps> {
  static defaultProps = {
    prefix: 'z2o-input',
    size: 'normal',
    disabled: false,
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(['large', 'normal', 'small']),
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    disabled: PropTypes.bool,
    allowClear: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    addonBefore: PropTypes.node,
    addonAfter: PropTypes.node,
    onPressEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  }

  render() {
    return <input type='text' />
  }
}
