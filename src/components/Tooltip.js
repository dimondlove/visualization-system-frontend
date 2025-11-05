import React from "react";
import { motion } from "framer-motion";

export function Tooltip({ name, substance, position = "right" }) {
	const positionClass = position === "right" ? "left-full ml-3 top-1/2 -translate-y-1/2" : "left-full ml-3 top-1/2 -translate-y-1/2";

	return (
		<motion.div
			initial={{ opacity: 0, x: 5 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0 }}
			className={`absolute ${positionClass} bg-black text-white text-xs rounded-md px-3 py-2 shadow-lg z-10 max-w-[220px] whitespace-pre-line`}
		>
			<p className="font-semibold mb-1">{name}</p>
			{substance && <p className="text-gray-200">{substance}</p>}
		</motion.div>
	);
}