import Dropdown from '../components/Dropdown'
import {useState} from "react";

function DropdownPage() {
    const [selected, setSelected] = useState('');

    const handleSelect = (option) => {
        setSelected(option)
    }
    const options = [
        {
            value: "1",
            label: "Option 1"
        },
        {
            value: "2",
            label: "Option 2"
        },
        {
            value: "3",
            label: "Option 3"
        }
    ]
    return (
        <div className='flex'>
            <Dropdown options={options} value={selected} onChange={handleSelect} />
            <Dropdown options={options} value={selected} onChange={handleSelect} />
            <Dropdown options={options} value={selected} onChange={handleSelect} />
        </div>

    )
}

export default DropdownPage;