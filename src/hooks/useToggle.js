import { useState } from "react";

export default function useToggle() {
    const [toggle, setToggle] = useState(false);

    const onChange = () => setToggle(prev => !prev);

    return [toggle, onChange]
}