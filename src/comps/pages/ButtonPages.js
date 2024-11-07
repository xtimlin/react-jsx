// import Button from '../components/Button'
import Button from './../components/Button'

// import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/cg";

function ButtonPage() {

    const handleClick = () => {
        console.log('click')
    }

    const handleMouseEnter = () => {
        console.log('mouseenter')
    }

    return (
        <div>
            <h1>button page</h1>

            <div>
                <Button success rounded outline
                        className="mb-5"
                        onClick={handleClick}>
                    hello
                </Button>
            </div>
            <div><Button danger outline onMouseEnter={handleMouseEnter}> how </Button></div>
            <div><Button warning> are </Button></div>
            <div><Button secondary outline> you </Button></div>
            <div><Button primary rounded> doing </Button></div>

        </div>
    )
}


export default ButtonPage;