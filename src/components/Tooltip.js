import React from "react";
import { motion } from "framer-motion";

export function Tooltip({ text }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -5 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0 }}
			className="absolute left-full ml-2 bg-black text-white text-xs rounded-md px-3 py-2 shadow-lg z-10 w-max whitespace-nowrap"
		>
			{text}
		</motion.div>
	);
}