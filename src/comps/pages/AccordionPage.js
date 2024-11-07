import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            label: 'Label 1',
            content: 'content 1, content 1, content 1, content 1, content 1, '
        },
        {
            label: 'Label 2',
            content: 'content 2, content 2, content 2, content 2, content 2, content 2, content 2, content 2, '
        },
        {
            label: 'Label 3',
            content: 'content 3, content 3, content 3, content 3, content 3, content 3, content 3, content 3, content 3, '
        },
    ]
    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}


export default AccordionPage;