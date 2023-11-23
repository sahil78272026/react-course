// react looks everything as an object

function customRender(reactElement, mainContainer){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    mainContainer.appendChild(domElement)
    */
    const domElement = document.createElement(reactElement.type)  // creating an element like an 'a' tag
    domElement.innerHTML = reactElement.children // setting inner HTML of that element
    for(const prop in reactElement.props){ // loop and setting attributes
        if (prop==='children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)  // appending the child to the container


}

const reactElement = {
    type:'a',
    props:{
        href:"http://google.com",
        target:'_blank'
    },
    children: "click me to visit google"
}

// can also use getElementById
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)