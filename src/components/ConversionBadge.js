import React from "react";

export function ConversionBadge({ conversion }) {
	return (
		<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md z-10">
			Конверсия: {conversion.toFixed(1)}%
		</div>
	);
	}