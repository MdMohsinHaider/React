import Parent from "./props/Parent";
import PropsDrillingParent from "./propsdrilling/PropsDrillingParent";
import Statesincbc from "./states/cbc/Statesincbc";
import Counter from "./states/fbc/Counter";
import Heart from "./states/fbc/Heart";
import States from "./states/fbc/States";

const App = () => {
    return(
        <>
            <h1>I am Component</h1>
            <States/><hr />
            <Counter/><hr />
            <Heart/><hr />
            <Statesincbc/><hr />
            <Parent/><hr />
            <PropsDrillingParent/>
        </>
    )
}
export default App;