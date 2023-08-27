import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Footer } from './Footer'

const qaId = 'content-component'

describe('Footer', () => {
  test('render Footer by default', () => {
    const content = 'Content'

    render(<Footer dataId={qaId}>{content}</Footer>)

    const contentWrapper = screen.getByTestId(qaId)
    const text = screen.getByText(content)
    expect(contentWrapper).toBeInTheDocument()
    expect(text).toBeVisible()
  })

  test('add className', () => {
    const className = 'my-class'

    render(<Footer className={className} dataId={qaId} />)
    const contentWrapper = screen.getByTestId(qaId)

    expect(contentWrapper).toHaveClass(className)
  })
})
