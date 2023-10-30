import { Fruit } from '@/types'

export async function getFruits(init?: RequestInit): Promise<Fruit[]> {
  const response = await fetch('/api/fruits', init)

  if (!response.ok) {
    throw new Error('Failed to fetch fruits!')
  }

  return await response.json()
}
