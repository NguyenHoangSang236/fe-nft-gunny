import { useState, useCallback } from "react";

export default (initState) => {
    const [state, setState] = useState(initState);
    const setStates = useCallback(
        (states) => setState((prev) => ({ ...prev, ...states })),
        []
    );

    return [state, setStates];
}