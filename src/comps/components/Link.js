import classNames from "classnames";
import useNavigation from './../hooks/use-navigation';


function Link({to, children, className, activeClassname}) {
    const {navigate, currentPath} = useNavigation();
    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassname
    );

    const handleClick = (event) => {
        // if user hold on the ctrl or command key and click on the link then open page in the new tab
        if (event.metaKey || event.ctrlKey) {
            return
        }
        event.preventDefault();
        navigate(to)
    }
    return (<a className={classes} href={to} onClick={handleClick}>{children}</a>)
}

export default Link;