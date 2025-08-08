import React, { useState } from "react";
const test = () => {
    const [state, setState] = useState<number | undefined>(1);

    return (
        <>
            <div>
                <h2 className="text-red-500 text-xl">test11111111111111111</h2>
                <button className="text-xl" onClick={() => {
                    setState(Number(state) + 1)
                }}>+1</button><br />
                state 값 : {state}
            </div>
        </>
    );
};

export default test;