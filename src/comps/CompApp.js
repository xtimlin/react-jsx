import './index.css'
// import ButtonPage from "./pages/ButtonPages";
import Accordion from "./components/Accordion";

function CompApp() {
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
            <h1>CompApp</h1>
            {/*<ButtonPage />*/}
            <Accordion items={items} />
        </div>
    )
}


export default CompApp;