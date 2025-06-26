
// function LearnProps(props) {
//   return (
//     <>
//     <div>LearnProps</div>
//     <h2> Prop name : {props.stock }</h2>
//     <h2> Prop price : {props.price }</h2>

//     </>
    
//   )
// }



function LearnProps({stock , price }) {
  return (
    <>
    <div>Props</div>
    <h2> Prop name : {stock }</h2>
    <h2> Prop price : {price }</h2>

    </>
    
  )
}

export default LearnProps