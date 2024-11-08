import './index.css'
import ButtonPage from "./pages/ButtonPages";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import Route from './components/Route';


function CompApp() {

    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <Sidebar />

            <div className='col-span-5'>
                <Route path='/accordion' >
                    <AccordionPage />
                </Route>
                <Route path='/' >
                    <DropdownPage />
                </Route>
                <Route path='/button' >
                    <ButtonPage />
                </Route>
            </div>
        </div>
    )
}


export default CompApp;