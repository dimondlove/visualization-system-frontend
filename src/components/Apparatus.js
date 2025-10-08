import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";
import { TemperatureBadge } from "./TemperatureBadge";

export function Apparatus({ id, name, substance, x, y, temperature, children }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="absolute text-center"
            style={{ left: x, top: y }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {temperature && <TemperatureBadge temperature={temperature} />}

            <motion.div
                className="w-24 h-24 bg-blue-200 border-2 border-blue-400 rounded-xl flex items-center justify-center cursor-pointer relative"
                whileHover={{ scale: 1.05 }}
            >
                <span className="text-sm font-semibold">Аппарат {id}</span>
            </motion.div>
            <div className="mt-2">{children}</div>
            {hovered && <Tooltip name={name} substance={substance} />}
        </div>
    );
}