import db from '@/resources/db.json'

export async function GET(_: Request): Promise<Response> {
  const fruits = db.fruits.sort((a, b) => a.name.localeCompare(b.name))
  return Response.json(fruits)
}
