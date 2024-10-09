import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/features/bonus/bonusSlice";


const Bonus = () => {
    const dispatch = useDispatch();
    const bonus = useSelector(state => state.bonus.points)
    return (
        <div>
                        <div className="border-2 border-gray-100 flex flex-col gap-2 items-center p-10">
                <p>Bonus Component</p>
                <p>Total Point : {bonus}</p>
                <button onClick={() => dispatch(increment())} className="bg-orange-500 p-2 rounded-sm">
                    Increment
                </button>
            </div>
        </div>
    );
};

export default Bonus;