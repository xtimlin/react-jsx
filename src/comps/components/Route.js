import useNavigate from './../hooks/use-navigation';


function Route({path, children}) {
    const {currentPath} = useNavigate();

    if (path === currentPath) {
        return children;
    }

    return null;

}

export default Route