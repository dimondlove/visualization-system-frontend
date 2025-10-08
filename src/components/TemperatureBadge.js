import React from "react";
import { motion } from "framer-motion";

export function TemperatureBadge({ temperature }) {
    return (
        <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow-md border border-orange-300"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {temperature}°C
        </motion.div>
    );
}