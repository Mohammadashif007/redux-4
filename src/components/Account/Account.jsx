import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    fetchUserById,
    increment,
    incrementByAmount,
} from "../../redux/features/account/accountSlice";
import { useState } from "react";

const Account = () => {
    const [amount, setAmount] = useState({
        amount: 0,
    });
    const dispatch = useDispatch();
    const account = useSelector((state) => state.accounts.value);

    return (
        <div>
            <div className="border-2 border-gray-100 flex flex-col items-center justify-between gap-20 p-10">
                <div className="">
                    <h1>Account Component</h1>
                    <h1>Amount : $ {account}</h1>
                </div>
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => dispatch(increment())}
                        className="bg-cyan-500 p-2 rounded-sm"
                    >
                        Increment +{" "}
                    </button>
                    <button
                        onClick={() => dispatch(decrement())}
                        className="bg-orange-500 p-2 rounded-sm"
                    >
                        Decrement -{" "}
                    </button>
                    <input
                        id="inputField"
                        onChange={(e) => setAmount({amount: e.target.value})}
                        className="p-2 text-black"
                        type="text"
                        placeholder="Amount"
                    />
                    <button onClick={() => dispatch(incrementByAmount(Number(amount.amount)))} className="bg-orange-500 p-2 rounded-sm">
                        Increment By {amount.amount} +{" "}
                    </button>
                    <button onClick={() => dispatch(fetchUserById(1))} className="bg-orange-500 p-2 rounded-sm">
                        Get User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;
