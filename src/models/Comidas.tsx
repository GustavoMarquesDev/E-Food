class Food {
  id: number
  image: string
  name: string
  description: string
  infos: string[]
  nota: number

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    infos: string[],
    nota: number
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.description = description
    this.infos = infos
    this.nota = nota
  }
}

export default Food
