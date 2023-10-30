'use client'

import { Combobox } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'

const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

export function MyCombobox(): ReactNode {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input
        autoComplete="off"
        className="py-2 px-4 rounded shadow shadow-black/40 focus:outline-none"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Combobox.Options className="bg-white mt-2 py-1 rounded shadow shadow-black/30">
        {filteredPeople.map((person) => (
          <Combobox.Option key={person} value={person} as={Fragment}>
            {({ active, selected }) => {
              const activeClassNames = active ? 'bg-gray-100' : ''
              const selectedClassNames = selected ? 'bg-cyan-100 text-cyan-700' : ''
              return (
                <li
                  className={`${activeClassNames} ${selectedClassNames} py-2 px-4 cursor-pointer`}
                >
                  {person}
                </li>
              )
            }}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}
