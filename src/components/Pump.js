import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";

export function Pump({ id, name, x, y }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div 
			className="absolute" 
			style={{ left: x, top: y }}
		>
			<div 
				className="relative w-15 h-10 bg-yellow-200 border-2 border-yellow-400 rounded-full flex items-center justify-center cursor-pointer"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<motion.div whileHover={{ scale: 1.05 }}>
					<span className="text-sm font-semibold">Насос</span>
				</motion.div>

				{hovered && <Tooltip name={name || `Насос ${id}`} position="right" />}
			</div>
		</div>
	);
}