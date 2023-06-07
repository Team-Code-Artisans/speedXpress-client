import { useCombobox } from "downshift"
import { useState } from "react"
import { districts } from "../../../../Data/Districs"

const InputDistricts = () => {

    const data = districts;

    function getDataFilter(inputValue) {
        const lowerCasedInputValue = inputValue.toLowerCase()

        return function dataFilter(book) {
            return (
                !inputValue ||
                book.name.toLowerCase().includes(lowerCasedInputValue)
            )
        }
    }

    function ComboBox() {
        const [items, setItems] = useState(data)
        const {
            isOpen,
            getToggleButtonProps,
            getMenuProps,
            getInputProps,
            highlightedIndex,
            getItemProps,
            selectedItem,
        } = useCombobox({
            onInputValueChange({ inputValue }) {
                setItems(data.filter(getDataFilter(inputValue)))
            },
            items,
            itemToString(item) {
                return item ? item.name : ''
            },
        })

        console.log(items)

        return (
            <div>
                <div className="w-72 flex flex-col gap-1">
                    <div className="flex shadow-sm bg-white gap-0.5 relative">
                        <div className="w-full">
                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full" type="text" placeholder="Districts"
                                {...getInputProps()}
                            />
                        </div>
                        <button
                            className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                            {...getToggleButtonProps()}
                        >
                            <svg id="close3" className={` transform ${isOpen ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <ul
                    className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 ${!(isOpen && items.length) && 'hidden'
                        }`}
                    {...getMenuProps()}
                >
                    {isOpen &&
                        items.map((item, index) => (
                            <li
                                className={`
                                    ${highlightedIndex === index && ''},
                                    ${selectedItem === item && 'font-bold'},
                                    'shadow-sm flex flex-col',
                                `}
                                key={`${item.value}${index}`}
                                {...getItemProps({ item, index })}
                            >
                                <span className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">{item.name}</span>
                            </li>
                        ))}
                </ul>
            </div>
        )
    }
    return <ComboBox />
}

export default InputDistricts