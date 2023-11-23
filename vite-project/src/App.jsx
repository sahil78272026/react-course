// jsx can return only one element , so if you to return 2 elements, keep it in paranthesis
// in vite, component(function) name should be in capital

import Youtube from "./Youtube"

function App() {
  return (
    <>
      <p> in vite app </p>

      <p> in vite app </p>
      <Youtube />
    </>
  )
}

export default App
