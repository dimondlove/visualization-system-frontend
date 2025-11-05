import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";

import { ReactComponent as FilterIcon } from "../assets/svg/filter.svg";

export function Filter({ id, name, substance, x, y }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div className="absolute text-center" style={{ left: x, top: y }}>
			<div
				className="relative flex items-center justify-center cursor-pointer"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<motion.div whileHover={{ scale: 1.05 }}>
					<FilterIcon className="w-24 h-24" />
				</motion.div>

				{hovered && <Tooltip name={name || "Фильтр"} substance={substance} position="right" />}
			</div>
		</div>
	);
}