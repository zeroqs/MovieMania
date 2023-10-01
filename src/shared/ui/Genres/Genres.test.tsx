import { render, screen } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import { describe, expect, test } from 'vitest'

import { Genres } from './Genres'

describe('Genres', () => {
  test('render Genres by default', () => {
    const genres = [
      { name: 'test' },
      { name: 'test2' },
      { name: 'test3' },
      { name: 'test4' },
    ]
    const showCount = 3

    render(
      <HashRouter>
        <Genres forSlider={false} showCount={showCount} genres={genres} />
      </HashRouter>,
    )

    const contentWrapper = screen.getAllByRole('text')

    for (let i = 0; i < showCount; i++) {
      expect(contentWrapper[i]).toHaveTextContent(genres[i].name)
    }
  })

  test('render Genres for slider', () => {
    const movies = [
      {
        id: 1,
        name: 'Test',
        year: 2001,
        shortDescription: 'Test',
        genres: [
          { name: 'test' },
          { name: 'test2' },
          { name: 'test3' },
          { name: 'test4' },
        ],
        rating: { imdb: '6' },
        backdrop: { url: 'str', previewUrl: 'str' },
      },
    ]
    const showCount = 3
    const activeIndex = 0
    render(
      <HashRouter>
        <Genres
          forSlider={true}
          movies={movies}
          showCount={showCount}
          activeIndex={activeIndex}
        />
        ,
      </HashRouter>,
    )

    const contentWrapper = screen.getAllByRole('text')

    for (let i = 0; i < showCount; i++) {
      expect(contentWrapper[i]).toHaveTextContent(
        movies[activeIndex].genres[i].name,
      )
    }
  })
})
