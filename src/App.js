import React, { useState } from "react";
import { Tabs } from "./components/Tabs";
import SumilationTab from "./pages/SimulationTab";
import Task3Tab from "./pages/Task3Tab";
import ReactorTab from "./pages/ReactorTab";

export default function App() {
    const [activeTab, setActiveTab] = useState("task1");

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
                Информационная система технологических процессов
            </h1>

            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="w-full flex justify-center mt-6">
                {activeTab === "task1" && <SumilationTab />}
                {activeTab === "task2" && <ReactorTab />}
                {activeTab === "task3" && <Task3Tab />}
            </div>
        </div>
    );
}

