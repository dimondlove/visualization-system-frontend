import React, { useState } from "react";
import { Tooltip } from "./Tooltip";

export function Filter({ id, x, y }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="absolute" style={{ left: x, top: y }}>
            <div
                className="relative w-20 h-20 bg-gray-200 border-2 border-gray-400 rounded-xl flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <span className="text-sm font-semibold">Фильтр {id}</span>
                {hovered && <Tooltip text="Фильтр" />}
            </div>
        </div>
    );
}