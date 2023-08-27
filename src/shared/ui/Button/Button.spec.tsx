import { HomeOutlined } from '@ant-design/icons'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { expect } from 'vitest'

import { Button } from './Button'

const qaId = 'button-component'

describe('Button', () => {
  test('render button by default', () => {
    const content = 'Button'
    render(<Button>{content}</Button>)

    const button = screen.getByRole('button')
    const text = screen.getByText(content)

    expect(button).toBeVisible()
    expect(button).not.toBeDisabled()
    expect(text).toBeVisible()
  })

  test.each(
    new Array<'button' | 'submit' | 'reset'>('button', 'submit', 'reset'),
  )('render with given "%s" htmlType', (type) => {
    render(<Button htmlType={type} dataId={qaId} />)
    const button = screen.getByTestId(qaId)

    expect(button).toHaveAttribute('type', `${type}`)
  })

  test('should render leftItem', () => {
    const iconQaId = 'icon-qa-id'

    render(
      <Button leftItem={<HomeOutlined data-testid={iconQaId} />}>Left</Button>,
    )

    const button = screen.getByRole('button')
    const iconComponent = screen.getByTestId(iconQaId)

    expect(iconComponent).toBeVisible()
    expect(button).toContainElement(iconComponent)
  })

  test('should render rightItem', () => {
    const iconQaId = 'icon-qa-id'

    render(
      <Button rightItem={<HomeOutlined data-testid={iconQaId} />}>Left</Button>,
    )

    const button = screen.getByRole('button')
    const iconComponent = screen.getByTestId(iconQaId)

    expect(iconComponent).toBeVisible()
    expect(button).toContainElement(iconComponent)
  })

  test('disabled when disabled=true prop is given', () => {
    render(<Button disabled={true} />)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
  })

  test('not disabled when disabled=false prop is given', () => {
    render(<Button disabled={false} />)
    const button = screen.getByRole('button')

    expect(button).not.toBeDisabled()
  })

  test('add className', () => {
    const className = 'my-class'

    render(<Button className={className} dataId={qaId} />)
    const button = screen.getByTestId(qaId)

    expect(button).toHaveClass(className)
  })

  test('use passed ref for component', () => {
    const ref = createRef<HTMLLabelElement>()

    render(<Button buttonRef={ref} dataId={qaId} />)
    const button = screen.getByTestId(qaId)

    expect(ref.current).toBe(button)
  })

  test('call onClick', async () => {
    const user = userEvent.setup()
    const handleOnClick = vi.spyOn(user, 'click')

    render(<Button dataId={qaId} />)
    const button = screen.getByTestId(qaId)

    await user.click(button)
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})
