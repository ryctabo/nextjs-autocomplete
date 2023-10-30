import { ReactNode } from 'react'

export default function Home(): ReactNode {
  return (
    <main className="grid justify-center text-center text-sky-900 py-4">
      <h3 className="text-4xl font-bold">Hello visitor!</h3>
      <p>We are waiting for you to select a fruit</p>
    </main>
  )
}
