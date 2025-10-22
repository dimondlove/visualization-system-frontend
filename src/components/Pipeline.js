import React from "react";

export function Pipeline({ points, color = "#9ca3af", width = 4, curved }) {
	if (!points || points.length < 2)
		return null;

	let pathData = "";

	if (curved) {
		pathData = `M ${points[0].x},${points[0].y}`;
		for (let i = 1; i < points.length - 1; i++) {
			const midX = (points[i].x + points[i + 1].x) / 2;
			const midY = (points[i].y + points[i + 1].y) / 2;
			pathData += ` Q ${points[i].x},${points[i].y} ${midX},${midY}`;
		}
		const last = points[points.length - 1];
		pathData += ` T ${last.x},${last.y}`;
	} else {
		pathData = points.map((p, i) => (i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`)).join(" ");
	}

	return (
		<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
			<path
				d={pathData}
				fill="none"
				stroke={color}
				strokeWidth={width}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}