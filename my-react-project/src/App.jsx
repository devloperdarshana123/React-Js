import HelloWorld from "./components/HelloWorld"
import LearnReact from "./components/LearnReact"
import LearnJSX from "./components/LearnJSX"
import LearnProps from "./components/LearnProps"
import LearnEvent from "./components/LearnEvent"
import LearnLiftingStateUp from "./components/LearnLiftingStateUp"
import UseState from "./components/UseState"
import CounterApp from "./components/CounterApp"
import UseEffect from "./components/UseEffect"
import UseMemmo from "./components/UseMemmo"
import ChildA from "./components/ChildA"
import UseRef from "./components/UseRef"
import CustomHooks from "./components/CustomHooks"
import ConditionalRendring from "./components/ConditionalRendring"
import { createContext, useState } from "react"
import Map from "./components/Map"
import InlineCSS from "./components/InlineCSS"
import LoadingImages from "./components/LoadingImages"



const StockContext =  createContext();
const UserContext = createContext();

function App() {
  let stock = "Tesla";
  let price = 127875
  const[user , setUser] = useState({name:"darshana" , isLoggedIn:'yes'})
  const Stock = (data) => {
    console.log(data);
  }

  return (
    <>
      {/* <h1>Learn React Darshii</h1>
      <h1>App Component</h1> */}
      {/* <LearnJSX /> */}
      {/* <HelloWorld /> */}
      {/* <LearnReact /> */}
      {/* <UseState />
      <LearnLiftingStateUp getStock={getStock} /> */}
      {/* <CounterApp /> */}
     {/* <UseMemmo /> */}
     {/* <StockContext.Provider value={{stock , price}}>
      <UserContext.Provider value={{user , setUser}}>
       <ChildA  />
      </UserContext.Provider>
     </StockContext.Provider> */}
     {/* <UseEffect /> */}
     {/* <UseRef /> */}
     {/* <CustomHooks /> */}
     {/* <InlineCSS /> */}
     <LoadingImages />

     {/* <ConditionalRendring /> */}
     {/* <Map /> */}
      {/* <LearnProps stock="Tesla" price={price} /> */}
    </>
  )
}

export default App
export { StockContext , UserContext };