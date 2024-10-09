import Account from "./components/Account/Account";
import Admin from "./components/Admin/Admin";
import Bonus from "./components/Bonus/Bonus";

function App() {
    return (
        <div className="bg-gray-600 p-5">
            <h1 className="text-2xl">App</h1>
            <p>Current Amount: </p>
            <p>Total Bonus: </p>
            <Account></Account>
            <Bonus></Bonus>
            <Admin></Admin>
        </div>
    );
}

export default App;
