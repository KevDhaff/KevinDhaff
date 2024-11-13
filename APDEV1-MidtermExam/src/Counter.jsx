import React, { useState } from "react";

export function Counter(){
    const [count, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
}
