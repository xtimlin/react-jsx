import {useEffect, useRef, useState} from "react";
import {FaAngleDown} from "react-icons/fa";
import Panel from "./Panel";

function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    // close dropdown if user click on somewhere else
    useEffect(()=>{
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])

    const handleClick = () => {
        // setIsOpen(!isOpen);
        setIsOpen((currentIsOpen) => !currentIsOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option);
    }

    const renderOptions = options.map((option) => {
        return (
            <div className='hover:bg-sky-100 rounded cursor-pointer p-1'
                 key={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
            </div>
        );
    });

    const content = value?.label || 'Select...'


    return (
        <div className='w-48 relative' ref={divEl}>
            <Panel
                className='flex justify-between items-center cursor-pointer'
                onClick={handleClick}>{content}<FaAngleDown/></Panel>
            {isOpen &&
                <Panel className='absolute top-full'>{renderOptions}</Panel>}
        </div>

    )
}

export default Dropdown;