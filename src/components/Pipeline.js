import React from "react";
import { motion } from "framer-motion";

export function Pipeline({ from, to, active }) {
    const width = to.x - from.x;

    return (
        <div className="absolute" style={{ left: from.x, top: from.y }}>
            <div className="relative h-[4px] bg-gray-300 rounded" style={{ width }}>
                {active && (
                    <>
                        {/* Основной поток */}
                        <motion.div
                            className="absolute top-0 left-0 h-[4px] bg-blue-500 rounded"
                            initial={{ width: 0 }}
                            animate={{ width }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        {/* Двигающаяся капля */}
                        <motion.div
                            className="absolute top-[-6px] w-4 h-4 bg-blue-600 rounded-full shadow-md"
                            initial={{ x:0, opacity: 0 }}
                            animate={{ x: width - 10, opacity: [0, 1, 1, 0] }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </>
                )}
            </div>
        </div>
    );
}