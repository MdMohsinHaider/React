import Statesincbc from "./states/cbc/Statesincbc";
import Counter from "./states/fbc/Counter";
import Heart from "./states/fbc/Heart";
import States from "./states/fbc/States";

const App = () => {
    return(
        <>
            <h1>I am Component</h1>
            {/* <Navbar/> */}
            <States/>
            <Counter/>
            <Heart/>
            <Statesincbc/>
        </>
    )
}
export default App;