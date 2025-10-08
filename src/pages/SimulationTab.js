import React, { useState } from "react";
import { Apparatus } from "../components/Apparatus";
import { Pipeline } from "../components/Pipeline";

export default function SumilationTab() {
    const [temp1, setTemp1] = useState(40);
    const [temp2, setTemp2] = useState(35);
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
        setIsRunning(true);
        setTimeout(() => setIsRunning(false), 2200);
    };

    return (
        <div className="relative w-[800px] h-[450px] border border-gray-300 bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-end mb-4">
                <button
                    onClick={handleStart}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow"
                >
                    Запустить процесс
                </button>
            </div>

            <Apparatus
                id="1"
                name="Аппарат приготовления углеводородной фазы"
                substance="Хлоропрен, канифоль, сера"
                x={100}
                y={180}
                temperature={temp1}
            >
                <label className="text-sm text-gray-700">Температура (°C):</label>
                <input
                    type="number"
                    value={temp1}
                    onChange={(e) => setTemp1(e.target.value)}
                    className="border rounded px-2 py-1 w-20 ml-2 text-sm"
                />
            </Apparatus>

            <Apparatus
                id="2"
                name="Аппарат приготовления водной фазы"
                substance="Раствор едкого натра, соли сульфокислот"
                x={500}
                y={180}
                temperature={temp2}
            >
                <label className="text-sm text-gray-700">Температура (°C):</label>
                <input
                    type="number"
                    value={temp2}
                    onChange={(e) => setTemp2(e.target.value)}
                    className="border rounded px-2 py-1 w-20 ml-2 text-sm"
                />
            </Apparatus>

            <Pipeline from={{ x: 196, y: 210 }} to={{ x:500, y: 210 }} active={isRunning} />
        </div>
    );
}