import React , {useContext} from 'react'
import { StockContext , UserContext } from '../App'

function ChildC() {
  const stockData = useContext(StockContext);
  const userData = useContext(UserContext);
  return (
    
    <>
    {/* <StockContext.Consumer>
      {
        ({stock , price}) =>{
          return(
           <UserContext.Consumer>
            {
              ({user})=>{
                return(
                 <>
                 <h2>user:{user.name}</h2
                 <h2>user:{user.isLoggedIn}</h2>
            <h2>ChildC - {stock} : {price}</h2>
            </>
                )
              }
            }
            </UserContext.Consumer>
          )
        }
      }
    </StockContext.Consumer> */}
   <h2>user : {userData.user.name}</h2>
   <h2>user : {userData.user.isLoggedIn}</h2>
    <h2>childC - {stockData.stock}</h2>
    </>
  )
}
export default ChildC