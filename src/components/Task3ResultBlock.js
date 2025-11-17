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

export default function Task3ResultBlock({ title, resp, data }) {
	if (!resp)
		return (
			<div className="border rounded-xl p-4 bg-white shadow-md text-gray-400 text-center">
				{title}: нет данных
			</div>
		);

	return (
		<div className="border rounded-xl p-4 bg-white shadow-md">
			<h3 className="text-lg font-medium mb-3">{title}</h3>

			{/* Параметры */}
			<div className="grid grid-cols-2 gap-2 text-sm mb-4">
				<div><b>a:</b> {resp.a.join(", ")}</div>
				<div><b>b:</b> {resp.b}</div>
				<div><b>F:</b> {resp.f}</div>
				<div><b>Статус:</b> {resp.text}</div>
			</div>

			{/* График */}
			<div className="h-[300px] mb-4">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="t" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="y_e" stroke="#0284c7" name="Эксперимент" />
						<Line type="monotone" dataKey="y_r" stroke="#16a34a" name="Модель" />
					</LineChart>
				</ResponsiveContainer>
			</div>

			{/* Таблица */}
			<div className="overflow-auto max-h-300">
				<table className="min-w-full text-sm text-center border-collapse">
					<thead className="bg-gray-100">
						<tr>
							<th className="border px-2 py-1">i</th>
							<th className="border px-2 py-1">t</th>
							<th className="border px-2 py-1">yₑ</th>
							<th className="border px-2 py-1">yᵣ</th>
						</tr>
					</thead>
					<tbody>
						{resp.t.map((t, i) => (
							<tr key={i} className="hover:bg-gray-50">
								<td className="border px-2 py-1">{i}</td>
								<td className="border px-2 py-1">{t}</td>
								<td className="border px-2 py-1">{resp.y_e[i]}</td>
								<td className="border px-2 py-1">{resp.y_r[i]}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
