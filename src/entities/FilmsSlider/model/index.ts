interface Genres {
  name: string
}

export interface IFilmSlider {
  id: number
  name: string
  year: number
  shortDescription: string

  genres: Genres[]
  rating: {
    imdb: string
  }
  backdrop: {
    url: string
    previewUrl: string
  }
}

export interface FilmSliderResponse {
  docs: IFilmSlider[]
}
