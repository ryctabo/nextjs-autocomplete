'use client'

import { Combobox } from '@headlessui/react'
import { Fragment, ReactNode, useState } from 'react'
import SelectButtonIcon from './SelectButtonIcon'

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
      <div className="relative">
        <Combobox.Input
          autoComplete="off"
          className="py-2 px-4 rounded shadow shadow-black/40 focus:outline-none"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Button className="absolute right-0 h-full px-1 text-neutral-400">
          <SelectButtonIcon />
        </Combobox.Button>
      </div>
      <Combobox.Options className="bg-white mt-2 py-1 rounded shadow shadow-black/30 select-none">
        {filteredPeople.length === 0 && query !== '' ? (
          <div className="py-2 px-4 cursor-default text-neutral-500">Nothing found.</div>
        ) : (
          filteredPeople.map((person) => (
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
          ))
        )}
      </Combobox.Options>
    </Combobox>
  )
}
