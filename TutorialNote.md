### JSX Note
https://jsx-notes.vercel.app/


```js
function App() {
    return (
        <h1>Hello App {new Date().toLocaleTimeString()}</h1>
    )

    // let message = 'Bye there!';
    // if (Math.random() > 0.5) {
    //     message = 'Hello there!';
    // }
    // return <h1>{message}</h1>;

    // return <h1>{new Date().toLocaleTimeString()}</h1>

    // const inputType = 'number';
    // const minValue = 5;
    // const maxValue = 100;
    // return <input type={inputType} min={minValue} max={maxValue}/>

    // return <textarea autoFocus/>

    // Rule #1: all property names follow camelCase
    // <input maxLength={5}/>

    // Rule #2: attributes meant to be numbers should be provided as numbers with curly braces
    // <input maxLength={5}/>

    // Rule #3:boolean true can be written with just the property name, false should be written with curly braces
    // <input spellCheck noValidate={false}/>

    // Rule #4: the class attribute is written as 'className'
    // <div className='divider' />

    // Rule #5: in-line style are provided as object
    // <div style={{padding:'5px'}}/>

}
```


```js
function ProfileCard(props) {
    // const title = props.title;
    // const handle = props.handle;

    // const {title, handle} = props;
}
function ProfileCard({title, handle}) {
    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    );
}


```