import React, { useState } from "react";
import axios from "axios";
import Task3ResultBlock from "../components/Task3ResultBlock";
import Task3CompareBlock from "../components/Task3CompareBlock";

const API_BASE_URL = "http://localhost:8080/api/task3/calc";

export default function Task3Tab() {
    const [file, setFile] = useState(null);
    const [params, setParams] = useState({
        d: 10,
        N: 28,
        Ftable: 2.58,
    });

    const [res2, setRes2] = useState(null);
    const [res3, setRes3] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setParams({ ...params, [e.target.name]: e.target.value });
    };

    const handleFile = (e) => setFile(e.target.files[0]);

    const sendRequest = async (method) => {
        if (!file) return alert("Выберите CSV файл");
        setLoading(true);

        try {
            const form = new FormData();
            form.append("file", file);
            form.append("d", params.d);
            form.append("N", params.N);
            form.append("Ftable", params.Ftable);
            form.append("method", method);

            const { data } = await axios.post(API_BASE_URL, form, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (method === 2) setRes2(data);
            if (method === 3) setRes3(data);

        } catch (err) {
            console.error(err);
            alert("Ошибка при расчёте");
        } finally {
            setLoading(false);
        }
    };

    const canCompare = res2 && res3;

    const buildChartData = (resp) => {
        if (!resp) return [];
        return resp.t.map((t, i) => ({
            t,
            y_e: resp.y_e[i],
            y_r: resp.y_r[i],
        }));
    };

    return (
        <div className="flex flex-col gap-8 p-6 w-full">
            <h2 className="text-2xl font-semibold text-gray-800">
                Идентификация объекта управления (Задание 3)
            </h2>

            <div className="border rounded-xl p-4 bg-white shadow-md w-full">
                <h3 className="text-lg font-medium mb-3">Загрузка данных</h3>

                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFile}
                    className="mb-4"
                />

                <div className="grid grid-cols-3 gap-4">
                    {["d", "N", "Ftable"].map((key) => (
                        <div key={key} className="flex flex-col">
                            <label className="text-sm text-gray-700 mb-1">{key}</label>
                            <input
                                type="number"
                                step="any"
                                name={key}
                                value={params[key]}
                                onChange={handleChange}
                                className="border rounded-lg p-2 text-sm focus:ring focus:ring-blue-200"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex gap-4 mt-4">
                    <button
                        onClick={() => sendRequest(2)}
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                        {loading ? "..." : "Рассчитать (2-й порядок)"}
                    </button>

                    <button
                        onClick={() => sendRequest(3)}
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        {loading ? "..." : "Рассчитать (3-й порядок)"}
                    </button>
                </div>
            </div>

            <Task3ResultBlock
                title="Модель 2-го порядка"
                resp={res2}
                data={buildChartData(res2)}
            />

            <Task3ResultBlock
                title="Модель 3-го порядка"
                resp={res3}
                data={buildChartData(res3)}
            />


            {canCompare && (
                <Task3CompareBlock res2={res2} res3={res3} Ftable={params.Ftable} />
            )}
        </div>
    );
}
