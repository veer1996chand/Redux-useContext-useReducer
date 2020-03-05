import React  from "react";
import { useStateValue } from "../../utils/store"

const Home = () => {
  const [state, dispatch] = useStateValue();
  
	console.log("chand",state.name)
  return <div> Hello World 
    {state.name}
      <button type="button" onClick={()=>dispatch({type:'ChangeName',payLoad:'veer' })}>ChangeName</button>
     </div>;
};

export default Home;
