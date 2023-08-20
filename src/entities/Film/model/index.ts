interface Fact {
  value: string
  type: string
  spoiler: boolean
}

interface Genre {
  name: string
}

interface Trailer {
  url: string
  name: string
  site: string
  type: string
}

interface Person {
  id: number
  photo: string
  name: string
}

interface SimilarMovie {
  id: number
  name: string
  poster: {
    url: string
    previewUrl: string
  }
}

export interface Film {
  id: number
  name: string
  description: string
  year: string
  poster: {
    url: string
    previewUrl: string
  }
  facts: Fact[]
  genres: Genre[]
  videos: {
    trailers: Trailer[]
  }
  persons: Person[]
  similarMovies: SimilarMovie[]
  budget: {
    value: number
    currency: string
  }
  rating: {
    imdb: number
  }
}
