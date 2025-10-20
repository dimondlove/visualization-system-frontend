import React, { useState } from "react";
import { Tooltip } from "./Tooltip";

export function Collector({ id, x, y }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="absolute" style={{ left: x, top: y }}>
            <div
                className="relative w-20 h-20 bg-green-200 border-2 border-green-400 rounded-xl flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span className="text-sm font-semibold">Сборник {id}</span>
                {hovered && <Tooltip text="Сборник" />}
            </div>
        </div>
    );
}