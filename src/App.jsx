import { useState } from "react";
import FlipkartNavbar from "./flipkartAssignment/FlipkartNavbar";
import ControlledForms from "./forms/ControlledForms";
import ControlledForms2 from "./forms/ControlledForms2";
import UncontrolldForms from "./forms/UncontrolldForms";
import Profile from "./images/Profile";
import LifeCycle from "./lifecycle/LifeCycle";
import Parent from "./props/Parent";
import PropsDrillingParent from "./propsdrilling/PropsDrillingParent";
import Footer from "./reactCss/Footer";
import InlineCSS from "./reactCss/InlineCSS";
import RefExample from "./refs/RefExample";
import Statesincbc from "./states/cbc/Statesincbc";
import Counter from "./states/fbc/Counter";
import Heart from "./states/fbc/Heart";
import States from "./states/fbc/States";
import FlipkartNav from "./task1/FlipkartNav";
import TodoWrapper from "./todoApp/TodoWrapper";
import SideEffects from "./useEffect/SideEffects";
import SideEffects2 from "./useEffect/SideEffects2";
import FetchApi from "./fetch/FetchApi";
import FetchApi1 from "./task2/FetchApi1";
import FetchApi2 from "./task2/FetchApi2";
import ContestChildA from "./context/ContestChildA";
import ContestParent from "./context/ContestParent";
import FetchApi3 from "./task2/FetchApi3";
import FetchApi4 from "./task2/Fetchapi4";
import FetchApi5 from "./task2/FetchApi5";
import FetchApi6 from "./task2/FetchApi6";

const App = () => {

    let [toggle,setToggle]= useState(false);

    return(
        <>
            {/* <UncontrolldForms/> */}
            {/* <RefExample/> */}
            {/* <ControlledForms/> <br /><br /> */}
            {/* <center> */}
            {/* <ControlledForms2/> <br /><br /> */}
            {/* </center> */}
            {/* <TodoWrapper/> */}
            {/* <h1>I am Component</h1> <br /> */}
            {/* <FlipkartNavbar/><br /><hr /> */}
            {/* <FlipkartNav/> */}
            {/* <InlineCSS/><br /><hr />
            <Profile/>
            <Footer/><br /><hr />
            <States/><br /><hr />
            <Counter/><hr />
            <Heart/><hr />
            <Statesincbc/><hr />
            <Parent/><hr />
            <PropsDrillingParent/> */}
            {/* <button onClick={()=> setToggle(!toggle)}>Toggle Switch</button>
            {
                toggle?<LifeCycle/>:<h1>No component</h1>
            } */}
            {/* <SideEffects/> */}

            {/* <button onClick={()=> setToggle(!toggle)}>Toggle Switch</button>
            {
                toggle?<SideEffects2/>:<h1>No component</h1>
            } */}

            {/* <FetchApi/> */}
            {/* <FetchApi1/> */}
            {/* <FetchApi2/> */}
            {/* <FetchApi3/> */}
            {/* <FetchApi4/> */}
            {/* <FetchApi5/> */}
            <FetchApi6/>
            {/* <ContestParent/> */}
        </>
    )
}
export default App;