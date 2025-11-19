import React from "react";

export function Tabs({ activeTab, setActiveTab }) {
    const tabs = [
        { id: "task1", label: "Эмульсионная полимеризация" },
        { id: "task2", label: "Реактор идеального вытеснения" },
        { id: "task3", label: "Идентификация ОУ" }
    ];

    return (
        <div className="flex space-x-4 bg-white shadow-md rounded-xl p-3">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeTab === tab.id
                        ? "bg-blue-500 text-white shadow"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}