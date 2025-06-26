import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import UseState from "./components/UseState"
import CounterApp from "./components/CounterApp"

function App() {
  // let price = 1000
  const getStock = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Learn React Darshii</h1>
      <h1>App Component</h1>
      {/* <LearnJSX /> */}
      {/* <HelloWorld /> */}
      {/* <LearnReact /> */}
      {/* <UseState />
      <LearnLiftingStateUp getStock={getStock} /> */}
      <CounterApp />
      {/* <LearnProps stock="Tesla" price={price} /> */}
    </>
  )
}

export default App