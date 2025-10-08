import React from "react";

export function Tooltip({ name, substance }) {
    return (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded-lg px-3 py-2 shadow-lg w-52 z-10">
            <p className="font-semibold mb-1">{name}</p>
            <p className="text-gray-200">{substance}</p>
        </div>
    );
}