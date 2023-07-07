import {useCount} from "../useCount";

export const Contact = () => {
    const {count, increase, decrease, reset} = useCount();
    return(
        <div className="counter">
            {count}
            <button onClick={increase}>increse</button>
            <button onClick={decrease}>decrese</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}
