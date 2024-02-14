class Food {
  id: number
  image: string
  name: string
  description: string
  infos: string[]

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    infos: string[]
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.description = description
    this.infos = infos
  }
}

export default Food
