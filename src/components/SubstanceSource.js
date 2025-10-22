import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";

export function SubstanceSource({ roman, name, x, y }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="absolute text-center select-none"
            style={{ left: x, top: y }}
        >
            <motion.div
                className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-lg cursor-pointer transition-colors ${ 
                    hovered ? "bg-blue-300 border-blue-500" : "bg-white border-gray-400"}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {roman}
                {hovered && <Tooltip name={`Вещество ${roman}`} substance={name} position="right" />}
            </motion.div>
        </div>
    );
}