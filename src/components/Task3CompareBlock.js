import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

export default function Task3CompareBlock({ res2, res3 }) {
	if (!res2 || !res3)
		return (
			<div className="border rounded-xl p-4 bg-white shadow-md text-gray-400 text-center">
				Недостаточно данных для сравнения моделей
			</div>
		);

	const compareData = res2.t.map((t, i) => ({
		t,
		y_e: res2.y_e[i],
		y_r2: res2.y_r[i],
		y_r3: res3.y_r[i],
	}));

	return (
		<div className="border rounded-xl p-4 bg-white shadow-md">
			<h3 className="text-lg font-medium mb-3">Сравнение моделей (2-й и 3-й порядок)</h3>

			{/* Основные параметры */}
			<div className="grid grid-cols-2 gap-2 text-sm mb-4">
				<div>
					<b>F (2-й порядок):</b> {res2.F}
					<br />
					<span className={res2.text.includes("не") ? "text-red-600" : "text-green-600"}>
						{res2.text}
					</span>
				</div>
				<div>
					<b>F (3-й порядок):</b> {res3.F}
					<br />
					<span className={res3.text.includes("не") ? "text-red-600" : "text-green-600"}>
						{res3.text}
					</span>
				</div>
			</div>

			{/* График сравнения */}
			<div className="h-[350px] mb-3">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={compareData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis
							dataKey="t"
							label={{
								value: "t",
								position: "insideBottom",
								dy: 20,
								style: { fill: "#374151", fontSize: 14 },
							}}
						/>
						<YAxis />
						<Tooltip />
						<Legend />

						<Line
							type="monotone"
							dataKey="y_e"
							stroke="#0284c7"
							name="Эксперимент"
							strokeWidth={2}
							dot={false}
						/>
						<Line
							type="monotone"
							dataKey="y_r2"
							stroke="#22c55e"
							name="Модель 2-го порядка"
							strokeWidth={2}
							dot={false}
						/>
						<Line
							type="monotone"
							dataKey="y_r3"
							stroke="#a855f7"
							name="Модель 3-го порядка"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
