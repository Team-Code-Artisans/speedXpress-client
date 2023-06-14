import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export default function InputDistricts({ selected, setSelected, data }) {

    const [query, setQuery] = useState('')

    const filteredDistrict =
        query === ''
            ? data
            : data.filter((singleDistrict) =>
                singleDistrict.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <div className="w-72">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="flex shadow-sm bg-white gap-0.5 relative">
                        <Combobox.Input
                            className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3 w-full"
                            displayValue={(singleDistrict) => singleDistrict.name}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex flex-col -space-y-1 justify-center items-center pr-2">
                            <IoIosArrowUp
                                className="h-4 w-4 text-gray-400"
                                aria-hidden="true"
                            />
                            <IoIosArrowDown
                                className="h-4 w-4 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredDistrict.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredDistrict.map((singleDistrict) => (
                                    <Combobox.Option
                                        key={singleDistrict.id}
                                        className={({ active }) =>
                                            `relative select-none py-2 pl-10 pr-4 text-base cursor-pointer ${active ? 'bg-gray-800 text-white' : 'text-gray-900'
                                            }`
                                        }
                                        value={singleDistrict}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {singleDistrict.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-gray-800'
                                                            }`}
                                                    >
                                                        <AiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
