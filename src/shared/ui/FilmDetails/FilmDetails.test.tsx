import { render, screen } from '@testing-library/react'

import { FilmDetails } from './FilmDetails'

const FilmDetailsDefaultId = 'defaultDetails-component'
const FilmDetailsSliderId = 'sliderDetails-component'

describe('FilmDetails', () => {
  test('render FilmDetails by default', () => {
    const rating = '5'
    const year = 2011
    render(<FilmDetails forSlider={false} rating={rating} year={year} />)

    const content = screen.getByTestId(FilmDetailsDefaultId)
    const ratingScreen = screen.getByText(rating)
    const yearScreen = screen.getByText(year)

    expect(content).toBeInTheDocument()
    expect(ratingScreen).toBeInTheDocument()
    expect(yearScreen).toBeInTheDocument()
  })

  test('render FilmDetails for slider', () => {
    const activeIndex = 0
    const movies = [
      {
        id: 1,
        name: 'Test',
        year: 2001,
        shortDescription: 'Test',
        genres: [{ name: 'test' }],
        rating: { imdb: '6' },
        backdrop: { url: 'str', previewUrl: 'str' },
      },
    ]

    render(
      <FilmDetails
        forSlider={true}
        movies={movies}
        activeIndex={activeIndex}
      />,
    )
    const content = screen.getByTestId(FilmDetailsSliderId)
    const ratingScreen = screen.getByText(movies[0].rating.imdb)
    const yearScreen = screen.getByText(movies[0].year)

    expect(content).toBeInTheDocument()
    expect(ratingScreen).toBeInTheDocument()
    expect(yearScreen).toBeInTheDocument()
  })

  test('add className to defaultDetails', () => {
    const className = 'my-class'

    render(<FilmDetails forSlider={false} className={className} />)
    const content = screen.getByTestId(FilmDetailsDefaultId)

    expect(content).toHaveClass(className)
  })

  test('add className to sliderDetails', () => {
    const className = 'my-class'
    const activeIndex = 0
    const movies = [
      {
        id: 1,
        name: 'Test',
        year: 2001,
        shortDescription: 'Test',
        genres: [{ name: 'test' }],
        rating: { imdb: '6' },
        backdrop: { url: 'str', previewUrl: 'str' },
      },
    ]

    render(
      <FilmDetails
        forSlider={true}
        movies={movies}
        activeIndex={activeIndex}
        className={className}
      />,
    )
    const content = screen.getByTestId(FilmDetailsSliderId)

    expect(content).toHaveClass(className)
  })
})
