import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>
                Custome React App
            </h1>
        </div>
    )
}


const AnotherElement = (
    <a href='http://google.com' target='_blank'>Visit Google</a>
)

// to convert an object into react element
const areactElement = React.createElement(
    // order is very importanat
    'a',  // first parameter should be an element
    {href:'http://google.com', target:'_blank'}, // second should be attributes
    'click to visit google' // third should be inner HTML or child elementh
    // username // react adds fourth variable as evaluated variable
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

    // MyApp() // can be run like this as well
    //  AnotherElement
    // areactElement


)
