import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Image } from './Image'

const qaId = 'content-component'

describe('Image', () => {
  test('render Image when isLoaded is false', () => {
    const src = 'src/string'
    const alt = 'alt'

    render(
      <Image
        src={src}
        alt={alt}
        dataId={qaId}
        skeletonHeight={100}
        skeletonWidth={100}
      />,
    )

    const contentSkeleton = screen.getByTestId('img-loading')

    expect(contentSkeleton).toBeTruthy()
  })

  test('render Image when isLoaded is true', () => {
    const src = 'src/string'
    const alt = 'alt'

    render(
      <Image
        src={src}
        alt={alt}
        dataId={qaId}
        skeletonHeight={100}
        skeletonWidth={100}
      />,
    )

    const image = screen.getByTestId(qaId)
    const skeleton = screen.getByTestId('img-loading')
    fireEvent.load(image)

    expect(image).toBeTruthy()

    expect(skeleton).not.toBeInTheDocument()
  })

  test('add className', () => {
    const className = 'my-class'
    const src = 'src/string'
    const alt = 'alt'

    render(<Image src={src} alt={alt} className={className} dataId={qaId} />)
    const contentWrapper = screen.getByTestId(qaId)

    expect(contentWrapper).toHaveClass(className)
  })
})
