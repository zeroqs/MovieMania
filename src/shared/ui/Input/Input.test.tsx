import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Input } from './Input'

describe('Input', () => {
  test('render Input by default', () => {
    render(<Input />)

    const contentWrapper = screen.getByRole('input')
    expect(contentWrapper).toBeVisible()
  })

  test('render input with prefix prop', () => {
    render(<Input prefix={<div>Additional</div>} />)

    expect(screen.getByText('Additional')).toBeVisible()
  })

  test('render input with suffix prop', () => {
    render(<Input suffix={<div>Additional</div>} />)

    expect(screen.getByText('Additional')).toBeVisible()
  })

  test('render no autocomplete attribute when no autoComplete, no id, no name props', () => {
    render(<Input />)
    const input = screen.getByRole('input')

    expect(input.getAttribute('autocomplete')).toBeNull()
  })

  test('render autocomplete=on attribute with autoComplete prop', () => {
    render(<Input autoComplete="on" />)
    const input = screen.getByRole('input')

    expect(input.getAttribute('autocomplete')).toBe('on')
  })

  test('render autocomplete=off attribute with autoComplete=false prop', () => {
    render(<Input autoComplete="off" />)
    const input = screen.getByRole('input')

    expect(input.getAttribute('autocomplete')).toBe('off')
  })

  test('call onChange when input changes value', () => {
    const onChange = vi.fn()

    render(<Input onChange={onChange} />)
    fireEvent.change(screen.getByRole('input'), { target: { value: '1' } })

    expect(onChange).toBeCalled()
  })

  test('add className', () => {
    const className = 'my-class'

    render(<Input className={className} />)
    const contentWrapper = screen.getByRole('input')

    expect(contentWrapper).toHaveClass(className)
  })
})
