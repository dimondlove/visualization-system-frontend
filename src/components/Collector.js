import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";
import { TemperatureBadge } from "./TemperatureBadge";

import { ReactComponent as CollectorIcon } from "../assets/svg/collector.svg";

export function Collector({ id, name, substance, x, y, temperature, children }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="absolute text-center" style={{ left: x, top: y }}>
            <div
                className="relative flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {temperature && <TemperatureBadge temperature={temperature} />}

                <motion.div whileHover={{ scale: 1.05 }}>
                    <CollectorIcon className="w-24 h-24" />
                </motion.div>

                {hovered && <Tooltip name={name || "Сборник"} substance={substance} position="right" />}

                <div className="mt-2">{children}</div>
            </div>
        </div>
    );
}