import React from "react";

export function Pipeline({ from, to }) {
	const width = to.x - from.x;
	const height = to.y - from.y;

	const angle = Math.atan2(height, width) * (180 / Math.PI);
	const length = Math.sqrt(width ** 2 + height ** 2);

	return (
		<div
			className="absolute bg-gray-400"
			style={{
				left: from.x,
				top: from.y,
				width: length,
				height: 4,
				transform: `rotate(${angle}deg)`,
				transformOrigin: "0 0",
			}}
		></div>
	);
}