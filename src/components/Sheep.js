import { useContext } from "react";
import { SheepContext } from "../App";

export default function Sheep() {
    const state = useContext(SheepContext)
    return (
        <div>
            {state.sheep}
        </div>
    )
}