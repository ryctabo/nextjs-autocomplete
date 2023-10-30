import { ReactNode } from 'react'

export default function Page({ params }: { params: { name: string } }): ReactNode {
  return (
    <main className="text-sky-900 text-center py-4">
      <p>You has been select:</p>
      <h3 className="text-4xl font-bold">{params.name}</h3>
    </main>
  )
}
