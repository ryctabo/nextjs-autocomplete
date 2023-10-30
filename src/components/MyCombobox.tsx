'use client'

import { Combobox } from '@headlessui/react'
import { Fragment, ReactNode, useEffect, useState } from 'react'
import SelectButtonIcon from './SelectButtonIcon'
import { Fruit } from '@/types'
import { getFruits } from '@/services/get-fruits'
import { useRouter } from 'next/navigation'

export default function MyCombobox(): ReactNode {
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [query, setQuery] = useState('')
  const router = useRouter()

  const filteredFruits =
    query === ''
      ? fruits
      : fruits.filter((fruit) => {
          return fruit.name.toLowerCase().includes(query.toLowerCase())
        })

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    getFruits({ signal })
      .then((data) => setFruits(data))
      .catch((err) => console.error(err))

    return () => abortController.abort()
  }, [])

  const handleSelectChange = (fruit: Fruit): void => {
    router.push(`/${fruit.name}`)
  }

  return (
    <div className="relative text-black w-min">
      <Combobox onChange={handleSelectChange}>
        <Combobox.Label className="block text-white py-1 text-center">
          Select a fruit
        </Combobox.Label>
        <div className="relative">
          <Combobox.Input
            autoComplete="off"
            placeholder="Orange"
            className="py-2 px-4 rounded shadow shadow-black/40 focus:outline-none"
            displayValue={(fruit: Fruit) => fruit.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute right-0 h-full px-1 text-neutral-400">
            <SelectButtonIcon />
          </Combobox.Button>
        </div>
        <Combobox.Options
          className={`
            absolute w-full text-left bg-white mt-2 py-1 rounded shadow shadow-black/30 
            select-none max-h-72 overflow-y-auto
          `}
        >
          {filteredFruits.length === 0 && query !== '' ? (
            <div className="py-2 px-4 cursor-default text-neutral-500">Nothing found.</div>
          ) : (
            filteredFruits.map((fruit) => (
              <Combobox.Option key={fruit.id} value={fruit} as={Fragment}>
                {({ active, selected }) => {
                  const activeClassNames = active ? 'bg-gray-100' : ''
                  const selectedClassNames = selected ? 'bg-cyan-100 text-cyan-700' : ''
                  return (
                    <li
                      className={`block ${activeClassNames} ${selectedClassNames} py-2 px-4 cursor-pointer`}
                    >
                      {fruit.name}
                    </li>
                  )
                }}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Combobox>
    </div>
  )
}
