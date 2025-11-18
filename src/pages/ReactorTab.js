import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/api";
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
		U: 4,
		lMax: 2.0,
		h: 0.1,
		k1: 0.5,
		k2: 2.0,
		k3: 1.0,
		Xa: 0.5,
		Xb: 0.0,
		Xc: 0.5,
		Xd: 0.0,
	});

	const [L, setL] = useState(1.0);

	const [tableData, setTableData] = useState([]);
	const [Lresult, setLresult] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleCalculate = async () => {
		setLoading(true);
		try {
			const response = await axios.post(`${API_BASE_URL}/calculateAll`, formData);
			setTableData(response.data);
		} catch (error) {
			console.error("Ошибка при расчёте:", error);
      		alert("Ошибка при запросе расчёта");
		} finally {
			setLoading(false);
		}
	};

	const handleLCalc = async () => {
		setLoading(true);
		const requestBody = {
			L: parseFloat(L),

			U: formData.U,
			k1: formData.k1,
			k2: formData.k2,
			k3: formData.k3,
			Xa: formData.Xa,
			Xb: formData.Xb,
			Xc: formData.Xc,
			Xd: formData.Xd,

			lMax: formData.lMax,
			h: formData.h,
		};
		try {
			const response = await axios.post(`${API_BASE_URL}/calculateAtL`, requestBody);
      		setLresult(response.data);
		} catch (error) {
			console.error("Ошибка при расчёте по L:", error);
      		alert("Ошибка при запросе расчёта по L");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col gap-8 p-6 w-full">
			<h2 className="text-2xl font-semibold text-gray-800">
        		Моделирование химической реакции в реакторе идеального вытеснения
      		</h2>

			<div className="flex justify-center items-center mb-8">
				<img
					src="/reactor-diagram.jpg"
					alt="Схема реактора идеального вытеснения"
					className="w-full max-w-[1000px] rounded-lg shadow-lg border border-gray-200"
				/>
			</div>

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
							disabled={loading}
							className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
						>
							{loading ? "Рассчет..." : "Рассчитать"}
						</button>
					</div>

					{/* Расчет при заданном L */}
					<div className="border rounded-xl p-4 shadow-md bg-white">
						<h3 className="text-lg font-medium mb-3">
							Концентрации при заданном L
						</h3>

						<div className="flex gap-3 items-center mb-3">
							<label className="text-sm text-gray-700">L =</label>
							<input 
								type="number"
								step="0.1"
								name="L"
								value={L}
								onChange={(e) => setL(e.target.value)}
								className="border rounded-lg p-2 w-24 text-sm focus:ring focus:ring-blue-200"
							/>
							<button
								onClick={handleLCalc}
								disabled={loading}
								className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition"
							>
								{loading ? "..." : "Вычислить"}
							</button>
						</div>

						{Lresult && (
							<div className="mt-2 text-sm text-gray-700">
								<p><b>L:</b> {Lresult.L}</p>
								<p>
									<b>Xa:</b> {Lresult.Xa} | <b>Xb:</b> {Lresult.Xb}
								</p>
								<p>
									<b>Xc:</b> {Lresult.Xc} | <b>Xd:</b> {Lresult.Xd}
								</p>
								<p><b>Σ:</b> {Lresult.sum}</p>
							</div>
						)}
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
										<td className="border px-2 py-1">{row.L}</td>
										<td className="border px-2 py-1">{row.Xa}</td>
										<td className="border px-2 py-1">{row.Xb}</td>
										<td className="border px-2 py-1">{row.Xc}</td>
										<td className="border px-2 py-1">{row.Xd}</td>
										<td className="border px-2 py-1 font-semibold">{row.sum}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* График */}
					<div className="border rounded-xl p-4 bg-white shadow-md h-[400px]">
						<h3 className="text-md font-medium mb-2">График концентраций</h3>
						<ResponsiveContainer width="100%" height="100%">
							<LineChart
								data={tableData}
								margin={{ top: 10, right: 90, left: 40, bottom: 40 }}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis
									dataKey="L"
									label={{ 
										value: "L", 
										position: "insideBottom", 
										dy: 20, 
										style: {
											fill: "#374151", // тёмно-серый (Tailwind gray-700)
											fontWeight: 500,
											fontSize: 14,
										},
									}}
									tick={{ fill: "#4b5563", fontSize: 12 }}
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
								<Line type="monotone" dataKey="Xa" stroke="#3b82f6" strokeWidth={2} name="Xa" dot={false} />
								<Line type="monotone" dataKey="Xb" stroke="#10b981" strokeWidth={2} name="Xb" dot={false} />
								<Line type="monotone" dataKey="Xc" stroke="#f59e0b" strokeWidth={2} name="Xc" dot={false} />
								<Line type="monotone" dataKey="Xd" stroke="#ef4444" strokeWidth={2} name="Xd" dot={false} />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</div>
	);
}