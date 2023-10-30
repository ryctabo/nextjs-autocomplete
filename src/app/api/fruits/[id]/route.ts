import db from '@/resources/db.json'

interface Props {
  params: {
    id: string
  }
}

export async function GET(req: Request, { params }: Props): Promise<Response> {
  const fruitId = params.id
  const fruit = db.fruits.find(fruit => fruit.id === fruitId)
  if (!fruit) {
    return Response.json(
      {
        status: 404,
        title: 'Fruit Not Found',
        detail: `Fruit with ID ${fruitId} was not found`
      },
      { status: 404 }
    )
  }
  return Response.json(fruit)
}
