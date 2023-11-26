// jsx can return only one element , so if you to return 2 elements, keep it in paranthesis
// in vite, component(function) name should be in capital

import Youtube from "./Youtube"

function App() {
  const username = 'Sahil'
  // variable going inside the return value should already be evaluated.
  // we cannot write an statement there
  return (
    <>
      <p> in vite app {2+2} </p>

      <p> in vite app {username} </p>
      <Youtube />
    </>
  )
}

export default App
