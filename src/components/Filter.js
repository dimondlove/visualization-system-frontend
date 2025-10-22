import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";

export function Filter({ id, name, x, y }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="absolute" style={{ left: x, top: y }}>
			<div
				className="relative w-24 h-24 bg-gray-200 border-2 border-gray-400 rounded-xl flex items-center justify-center cursor-pointer"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<motion.div whileHover={{ scale: 1.05 }}>
					<span className="text-sm font-semibold">Фильтр</span>
				</motion.div>

				{hovered && <Tooltip name={name || "Фильтр"} position="right" />}
			</div>
		</div>
	);
}