import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




// function App()
// {const name = "Rabin"
//   return (
//     <a href = "https://google.com" target = "_blank">Click me to visit google.com{name}</a>
//   )
// }


ReactDOM.createRoot(document.getElementById('root')).render(
<App /> 
  )
  


  // In summary, JSX gets transformed into React elements, and the `render` method places these elements into the specified root. The component lifecycle determines how these elements are created and managed in the DOM based on the component's behavior and state changes. Concurrent Mode allows for more efficient and responsive updates by potentially interleaving work on different parts of the component tree.


















// const name = "Rabin"


// const App = React.createElement(
  
//    and this React.createElement create the new element with this attributes and children using javasrcipt
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'Click me to visit google.com',
//   name

// )




// ReactDOM.createRoot(document.getElementById('root')).render(
// App 
// )


//How does react create element 

// create object and inject element in root 