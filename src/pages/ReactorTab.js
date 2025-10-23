import React, { useState } from "react";
import { reactorTestData } from "../data/reactorTestData";
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

export default function ReactorTab() {
	const [formData, setFormData] = useState({
		U: "",
		lMax: "",
		h: "",
		k1: "",
		k2: "",
		k3: "",
		Xa: "",
		Xb: "",
		Xc: "",
		Xd: "",
	});

	const [tableData, setTableData] = useState([]);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleCalculate = () => {
		setTableData(reactorTestData);
	};

	return (
		<div className="flex flex-col gap-8 p-6 w-full">
			<h2 className="text-2xl font-semibold text-gray-800">
        		Моделирование химической реакции в реакторе идеального вытеснения
      		</h2>

			<div className="flex gap-8">
				{/* Левая часть: форма и схема */}
				<div className="w-1/3 flex flex-col gap-6">
					<div className="border rounded-xl p-4 shadow-md bg-white">
						<h3 className="text-lg font-medium mb-2">Параметры расчета</h3>
						<div className="grid grid-cols-2 gap-3">
							{Object.keys(formData).map((key) => (
								<div key={key} className="flex flex-col">
									<label className="text-sm text-gray-700 mb-1">{key}</label>
									<input
										type="number"
										step="any"
										name={key}
										value={formData[key]}
										onChange={handleChange}
										className="border rounded-lg p-2 text-sm focus:ring focus:ring-blue-200"
									/>
								</div>
							))}
						</div>
						<button
							onClick={handleCalculate}
							className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
						>
							Рассчитать
						</button>
					</div>

					<div className="border rounded-xl p-4 shadow-inner bg-gray-50 h-48 flex items-center justify-center text-gray-500 italic">
						Схема реактора (заглушка)
					</div>
				</div>

				{/* Правая часть: таблица и график */}
				<div className="flex-1 flex flex-col gap-6">
					{/* Таблица */}
					<div className="border rounded-xl p-4 bg-white shadow-md overflow-auto max-h-[300px]">
						<table className="min-w-full border-collapse text-sm text-center">
							<thead className="bg-gray-100">
								<tr>
									<th className="border px-2 py-1">L</th>
									<th className="border px-2 py-1">Xa</th>
									<th className="border px-2 py-1">Xb</th>
									<th className="border px-2 py-1">Xc</th>
									<th className="border px-2 py-1">Xd</th>
									<th className="border px-2 py-1">Σ</th>
								</tr>
							</thead>
							<tbody>
								{tableData.map((row, idx) => (
									<tr key={idx} className="hover:bg-gray-50">
										<td className="border px-2 py-1">{row.L.toFixed(2)}</td>
										<td className="border px-2 py-1">{row.Xa.toFixed(4)}</td>
										<td className="border px-2 py-1">{row.Xb.toFixed(4)}</td>
										<td className="border px-2 py-1">{row.Xc.toFixed(4)}</td>
										<td className="border px-2 py-1">{row.Xd.toFixed(4)}</td>
										<td className="border px-2 py-1 font-semibold">{row.sum.toFixed(4)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* График */}
					 <div className="border rounded-xl p-4 bg-white shadow-md h-[300px]">
						<h3 className="text-md font-medium mb-2">График концентраций</h3>
						<ResponsiveContainer width="100%" height="100%">
							<LineChart
								data={tableData}
								margin={{ top: 10, right: 80, left: 10, bottom: 10 }}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis
								dataKey="L"
								label={{ value: "L", position: "insideBottom", offset: -5 }}
								/>
								<YAxis />
								<Tooltip />
								<Legend
								layout="vertical"
								align="right"
								verticalAlign="middle"
								wrapperStyle={{
									right: 10,
									top: "50%",
									transform: "translateY(-50%)",
									backgroundColor: "#ffffffcc",
									borderRadius: "8px",
									padding: "8px",
									boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
									lineHeight: "1.5em",
								}}
								/>
								<Line type="monotone" dataKey="Xa" stroke="#3b82f6" strokeWidth={2} name="Xa" />
								<Line type="monotone" dataKey="Xb" stroke="#10b981" strokeWidth={2} name="Xb" />
								<Line type="monotone" dataKey="Xc" stroke="#f59e0b" strokeWidth={2} name="Xc" />
								<Line type="monotone" dataKey="Xd" stroke="#ef4444" strokeWidth={2} name="Xd" />
							</LineChart>
							</ResponsiveContainer>
					 </div>
				</div>
			</div>
		</div>
	);
}