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

            <FetchApi/>
        </>
    )
}
export default App;