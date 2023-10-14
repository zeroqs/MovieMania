export interface Fact {
  value: string
  type: string
  spoiler: boolean
}

export interface Genre {
  name: string
}

interface Trailer {
  url: string
  name: string
  site: string
  type: string
}

export interface Person {
  id: number
  photo: string
  name: string
}

export interface SimilarMovie {
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

export interface GetFilmsArgs {
  genre?: string
  rating?: number
  release?: string
}
