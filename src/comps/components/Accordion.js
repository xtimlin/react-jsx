import { useState} from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

function Accordion({items}) {
    // const [status, setStatus] = useState(new Array(items.length).fill(false));
    //
    // const renderItems = items.map((item, index) => {
    //     const isExpanded = status[index];
    //
    //     return (
    //         <div key={index} onClick={() => setStatus( status.map((value, i) => (i === index ? !value : value)))}>
    //             <div>{item.label}</div>
    //             {isExpanded && <div>{item.content}</div>}
    //         </div>
    //     );
    // });


    const [expandedIndex, setExpandedIndex] = useState(-1);
    const handleClick = (clickedIndex) => {
        // if (expandedIndex === clickedIndex) {
        //     setExpandedIndex(-1)
        // } else {
        //     setExpandedIndex(clickedIndex)
        // }
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === clickedIndex) {
                return -1;
            } else {
                return clickedIndex;
            }
        })

    }

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const icon = <span className='text-2xl'>{isExpanded ? <FaAngleDown/> : <FaAngleLeft/>}</span>
        return (
            // <div key={index} onClick={() => setExpandedIndex(index)}> // inline call works fine
            <div key={index}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'
                     onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        );
    });

    return <div className='border-x border-t rounded'>{renderItems}</div>
}

export default Accordion;