interface BirthPlace {
  value: string
}

interface Fact {
  value: string
}

interface Profession {
  value: string
}

interface Movie {
  id: number
  name: string
  alternativeName: string
  rating: number | null
  general: boolean
  enProfession: string
}

export interface Person {
  id: number
  name: string
  photo: string
  profession: Profession[]
  sex: string
  age: number
  birthPlace: BirthPlace[]
  birthday: string
  death: string | null
  enName: string
  facts: Fact[]
  growth: number
  movies: Movie[]
}
