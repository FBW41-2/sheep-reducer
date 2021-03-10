import { useContext } from "react";
import { SheepContext } from "../App";

export default function Message() {
    const state = useContext(SheepContext)
    return (
        <p>
            {state.message}
        </p>
    )
}