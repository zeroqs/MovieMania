import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { FilmSliderLayout } from './FilmSliderLayout'

const qaId = 'content-component'

describe('FilmSliderLayout', () => {
  test('render FilmSliderLayout by default', () => {
    const content = 'Content'
    const bgImage = 'bgImageUrl'
    const onLoadLayout = () => {}

    render(
      <FilmSliderLayout
        bgImage={bgImage}
        onLoadLayout={onLoadLayout}
        dataId={qaId}
      >
        {content}
      </FilmSliderLayout>,
    )

    const contentWrapper = screen.getByTestId(qaId)
    const text = screen.getByText(content)
    expect(contentWrapper).toBeInTheDocument()
    expect(text).toBeVisible()
    expect(contentWrapper).toHaveStyle(
      `background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage}) `,
    )
  })

  test('add className', () => {
    const className = 'my-class'
    const bgImage = 'bgImageUrl'
    const onLoadLayout = () => {}

    render(
      <FilmSliderLayout
        bgImage={bgImage}
        onLoadLayout={onLoadLayout}
        className={className}
        dataId={qaId}
      />,
    )
    const contentWrapper = screen.getByTestId(qaId)

    expect(contentWrapper).toHaveClass(className)
  })
})
