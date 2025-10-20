import React, { useState } from "react";
//import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";
//import { TemperatureBadge } from "./TemperatureBadge";

export function Apparatus({ id, name, x, y }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="absolute text-center"
			style={{ left: x, top: y }}
		>
			<div
				className="w-24 h-24 bg-blue-200 border-2 border-blue-400 rounded-xl flex items-center justify-center cursor-pointer"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				<span className="text-sm font-semibold">Аппарат {id}</span>
				{hovered && <Tooltip text={name} />}
			</div>
		</div>
	);
}