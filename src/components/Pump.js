import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";

import { ReactComponent as PipmIcon } from "../assets/svg/pump.svg";

export function Pump({ id, name, x, y }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div 
			className="absolute" 
			style={{ left: x, top: y }}
		>
			<div 
				className="relative flex items-center justify-center cursor-pointer"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<motion.div whileHover={{ scale: 1.05 }}>
					<PipmIcon className="w-10 h-10" />
				</motion.div>

				{hovered && <Tooltip name={name || `Насос ${id}`} position="right" />}
			</div>
		</div>
	);
}