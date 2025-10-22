import React, { useState } from "react";
import { Apparatus } from "../components/Apparatus";
import { Pump } from "../components/Pump";
import { Collector } from "../components/Collector";
import { Filter } from "../components/Filter";
import { Pipeline } from "../components/Pipeline";

export default function SimulationTab() {
	const [temps, setTemps] = useState({
		1: 40,
		2: 35,
		3: 42,
		5: 30,
		6: 25,
		7: 25,
		8: 33,
		9: 50,
	});

	return (
		<div className="relative w-[1250px] h-[650px] border border-gray-300 bg-white rounded-2xl shadow-md p-6 overflow-visible">
			{/* Верхний ряд */}
			<Apparatus id={1} name="Аппарат 1: Углеводородная фаза" x={50} y={50} temperature={temps[1]} />
			<Apparatus id={2} name="Аппарат 2: Водная фаза" x={200} y={50} temperature={temps[2]} />
			<Apparatus id={5} name="Аппарат 5: Инициатор (K₂S₂O₈)" x={400} y={50} temperature={temps[5]} />
			<Apparatus id={6} name="Аппарат 6: Аммиачная вода" x={550} y={50} temperature={temps[6]} />
			<Apparatus id={7} name="Аппарат 7: Сульфит натрия" x={700} y={50} temperature={temps[7]} />
			<Apparatus id={8} name="Аппарат 8: Стабилизатор" x={850} y={50} temperature={temps[8]} />

			{/* Нижний ряд */}
			<Apparatus id={3} name="Аппарат 3: Смеситель" x={150} y={320} temperature={temps[3]} />
			<Pump id={4} name="Насос 4: циркуляция" x={350} y={330} />
			<Apparatus id={9} name="Аппарат 9: Полимеризатор" x={500} y={320} temperature={temps[9]} />
			<Collector id={10} name="Сборник 10" x={700} y={320} />
			<Pump id={11} name="Насос 11: подача на фильтр" x={850} y={330} />
			<Filter id={12} name="Фильтр 12" x={970} y={320} />

			{/* Соединения */}
			<Pipeline from={{ x: 100, y: 130 }} to={{ x: 170, y: 340 }} /> {/* 1 → 3 */}
			<Pipeline from={{ x: 220, y: 130 }} to={{ x: 170, y: 340 }} /> {/* 2 → 3 */}
			<Pipeline from={{ x: 170, y: 340 }} to={{ x: 380, y: 340 }} /> {/* 3 → 4 */}
			<Pipeline from={{ x: 380, y: 340 }} to={{ x: 520, y: 340 }} /> {/* 4 → 9 */}
			<Pipeline from={{ x: 430, y: 130 }} to={{ x: 520, y: 340 }} /> {/* 5 → 9 */}
			<Pipeline from={{ x: 580, y: 130 }} to={{ x: 520, y: 340 }} /> {/* 6 → 9 */}
			<Pipeline from={{ x: 730, y: 130 }} to={{ x: 520, y: 340 }} /> {/* 7 → 9 */}
			<Pipeline from={{ x: 880, y: 130 }} to={{ x: 520, y: 340 }} /> {/* 8 → 9 */}
			<Pipeline from={{ x: 520, y: 340 }} to={{ x: 720, y: 340 }} /> {/* 9 → 10 */}
			<Pipeline from={{ x: 720, y: 340 }} to={{ x: 870, y: 340 }} /> {/* 10 → 11 */}
			<Pipeline from={{ x: 870, y: 340 }} to={{ x: 990, y: 340 }} /> {/* 11 → 12 */}
		</div>
	);
}
