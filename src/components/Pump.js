import React, { useState } from "react";
import { Tooltip } from "./Tooltip";

export function Pump({ id, x, y }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="absolute" style={{ left: x, top: y }}>
            <div 
                className="relative w-16 h-16 bg-yellow-200 border-2 border-yellow-400 rounded-full flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span className="text-sm font-semibold">Насос{id}</span>
                {hovered && <Tooltip text={`Насос ${id}`} />}
            </div>
        </div>
    );
}