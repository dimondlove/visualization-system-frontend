import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "./Tooltip";
import { TemperatureBadge } from "./TemperatureBadge";

import { ReactComponent as Apparatus1 } from "../assets/svg/apparatus1.svg";
import { ReactComponent as Apparatus2 } from "../assets/svg/apparatus2.svg";
import { ReactComponent as Apparatus3 } from "../assets/svg/apparatus3.svg";
import { ReactComponent as Apparatus5 } from "../assets/svg/apparatus5.svg";
import { ReactComponent as Apparatus6 } from "../assets/svg/apparatus6.svg";
import { ReactComponent as Apparatus7 } from "../assets/svg/apparatus7.svg";
import { ReactComponent as Apparatus8 } from "../assets/svg/apparatus8.svg";
import { ReactComponent as Apparatus9 } from "../assets/svg/apparatus9.svg";

const iconMap = {
	1: Apparatus1,
	2: Apparatus2,
	3: Apparatus3,
	5: Apparatus5,
	6: Apparatus6,
	7: Apparatus7,
	8: Apparatus8,
	9: Apparatus9,
};

export function Apparatus({ id, name, substance, x, y, temperature, children }) {
	const [hovered, setHovered] = useState(false);
	const Icon = iconMap[id];

	return (
		<div
			className="absolute text-center"
			style={{ left: x, top: y }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{temperature && <TemperatureBadge temperature={temperature} />}
				
			<motion.div 
				className="relative flex items-center justify-center"
				whileHover={{ scale: 1.05 }}
			>
				<Icon className="w-40 h-40 z-100" />
			</motion.div>

			{hovered && <Tooltip name={name} substance={substance} position="right" />}
			
			<div className="mt-2">{children}</div>
		</div>
	);
}