import { render, screen } from '@testing-library/react'

import { Content } from './Content'

const qaId = 'content-component'

describe('Content', () => {
  test('render content by default', () => {
    const content = 'Content'

    render(<Content dataId={qaId}>{content}</Content>)

    const contentWrapper = screen.getByTestId(qaId)
    const text = screen.getByText(content)
    expect(contentWrapper).toBeInTheDocument()
    expect(text).toBeVisible()
  })

  test('add className', () => {
    const className = 'my-class'

    render(<Content className={className} dataId={qaId} />)
    const contentWrapper = screen.getByTestId(qaId)

    expect(contentWrapper).toHaveClass(className)
  })
})
