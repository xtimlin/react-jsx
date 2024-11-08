import Link from './Link'

function Sidebar() {
    const links = [
        {label: 'Dropdown', path:'/'},
        {label: 'Accordion', path:'/accordion'},
        {label: 'Buttons', path:'/button'},
    ]

    const renderedLinks = links.map((link, index) => {
        return (
            <Link
                key={index}
                to={link.path}
                className='mb-3'
                activeClassname='font-bold border-l-4 border-blue-500 pl-2'
            >
                {link.label}
            </Link>)
    })

    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar;