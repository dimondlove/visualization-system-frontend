import React, { useState } from "react";
import { Apparatus } from "../components/Apparatus";
import { Pump } from "../components/Pump";
import { Collector } from "../components/Collector";
import { Filter } from "../components/Filter";
import { Pipeline } from "../components/Pipeline";
import { SubstanceSource } from "../components/SubstanceSource";

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
		<div className="relative w-[1400px] h-[800px] border border-gray-300 bg-white rounded-2xl shadow-md p-6 overflow-visible">
			{/* Верхний ряд аппаратов */}
			<Apparatus id={1} name="Аппарат приготовления углеводородной фазы" x={100} y={200} temperature={temps[1]} />
			<Apparatus id={2} name="Аппарат приготовления водной фазы" x={350} y={200} temperature={temps[2]} />
			<Apparatus id={5} name="Аппарат приготовления раствора инициатора" x={520} y={200} temperature={temps[5]} />
			<Apparatus id={6} name="Аппарат приготовления раствора активатора" x={700} y={200} temperature={temps[6]} />
			<Apparatus id={7} name="Аппарат приготовления раствора активатора" x={890} y={200} temperature={temps[7]} />
			<Apparatus id={8} name="Аппарат приготовления эмульсии стабилизатора" x={1100} y={200} temperature={temps[8]} />
			

			{/* Нижний ряд аппаратов */}
			<Apparatus id={3} name="Смеситель" x={225} y={450} temperature={temps[3]} />
			<Pump id={4} name="Насос" x={340} y={580} />
			<Apparatus id={9} name="Полимеризатор" x={580} y={480} temperature={temps[9]} />
			<Collector id={10} name="Емкость для латекса" x={860} y={450} />
			<Pump id={11} name="Насос" x={960} y={580} />
			<Filter id={12} name="Фильтр" x={1060} y={450} />

			{/* Источник веществ */}
			<SubstanceSource roman="I" name="Хлоропрен" x={50} y={100} />
			<SubstanceSource roman="II" name="Канифоль, сера" x={200} y={100} />
			<SubstanceSource roman="III" name="Раствор едкого натра" x={310} y={100} />
			<SubstanceSource roman="IV" name="Соли сульфокислот" x={460} y={70} />
			<SubstanceSource roman="V" name="Персульфат калия" x={620} y={130} />
			<SubstanceSource roman="VI" name="20%-ный водный аммиак" x={700} y={130} />
			<SubstanceSource roman="VII" name="Вода" x={680} y={50} />
			<SubstanceSource roman="VIII" name="Раствор сульфита натрия" x={990} y={130} />
			<SubstanceSource roman="IX" name="Стабилизатор" x={1050} y={130} />
			<SubstanceSource roman="X" name="Растворитель" x={1135} y={80} />
			<SubstanceSource roman="XI" name="Тиурам" x={1200} y={130} />
			<SubstanceSource roman="XII" name="Рассол" x={500} y={530} />
			<SubstanceSource roman="XIII" name="Азот" x={720} y={480} />
			<SubstanceSource roman="XIV" name="Латекс на выделение" x={1200} y={510} />
			
			{/* Соединения между источниками и аппаратами */}
			<Pipeline points={[{ x: 90, y: 120 }, { x: 120, y: 120 }, {x: 120, y: 200}]} curved /> {/* I → 1 */}
			<Pipeline points={[{ x: 200, y: 120 }, { x: 170, y: 120 }, {x: 170, y: 200}]} curved /> {/* II → 1 */}
			<Pipeline points={[{ x: 350, y: 120 }, { x: 370, y: 120 }, {x: 370, y: 200}]} curved /> {/* III → 2 */}]
			<Pipeline points={[{ x: 540, y: 120 }, { x: 420, y: 120 }, {x: 420, y: 200}]} /> {/* IV → 2 */}
			<Pipeline points={[{ x: 620, y: 150 }, { x: 590, y: 150 }, {x: 590, y: 200}]} curved /> {/* V → 5 */}
			<Pipeline points={[{ x: 720, y: 170 }, { x: 720, y: 200 }]} curved /> {/* VI → 6 */}
			<Pipeline points={[{ x: 680, y: 70 }, { x: 620, y: 70 }, {x: 620, y: 100}, {x: 540, y: 100}, {x: 540, y: 200}]} /> {/* VII → 5 */}
			<Pipeline points={[{x: 540, y: 150}, {x: 420, y: 150}]} /> {/* VII → 4 */}
			<Pipeline points={[{x: 620, y: 100}, {x: 840, y: 100}, {x: 840, y: 150}, {x: 770, y: 150}, {x: 770, y: 200}]} /> {/* VII → 6 */}
			<Pipeline points={[{x: 840, y: 150}, {x: 910, y: 150}, {x: 910, y: 200}]} /> {/* VII → 7 */}
			<Pipeline points={[{x: 990, y: 150}, {x: 960, y: 150}, {x: 960, y: 200}]} curved /> {/* VIII → 7 */}
			<Pipeline points={[{x: 1090, y: 150}, {x: 1120, y: 150}, {x: 1120, y: 200}]} curved /> {/* IX → 8 */}
			<Pipeline points={[{x: 1155, y: 120}, {x: 1155, y: 200}]} /> {/* X → 8 */}
			<Pipeline points={[{x: 1200, y: 150}, {x: 1180, y: 150}, {x: 1180, y: 200}]} curved /> {/* XI → 8 */}
			<Pipeline points={[{x: 540, y: 550}, {x: 580, y: 550}]} curved /> {/* XII → 9 */}
			<Pipeline points={[{x: 720, y: 500}, {x: 676, y: 500}]} curved /> {/* XIII → 9 */}
			<Pipeline points={[{x: 1110, y: 546}, {x: 1110, y: 560}, {x: 1250, y: 560}]} /> {/* 12 → XIV */}
			

			{/* Соединения между аппаратами */}
			<Pipeline points={[{x: 150, y: 296}, {x: 150, y: 400}, {x: 250, y: 400}, {x: 250, y: 450}]} curved /> {/* 1 → 3 */}
			<Pipeline points={[{x: 400, y: 296}, {x: 400, y: 400}, {x: 300, y: 400}, {x: 300, y: 450}]} curved /> {/* 2 → 3 */}
			<Pipeline points={[{x: 270, y: 546}, {x: 270, y: 600}, {x: 340, y: 600}]} /> {/* 3 → 4 */}
			<Pipeline points={[{x: 380, y: 600}, {x: 420, y: 600}, {x: 420, y: 470}, {x: 322, y: 470}]} /> {/* 4 → 3 */}
			<Pipeline points={[{x: 420, y: 480}, {x: 500, y: 480}, {x: 500, y: 450}, {x: 590, y: 450}]} /> {/* 4 → 9 */}
			<Pipeline points={[{x: 590, y: 296}, {x: 590, y: 480}]} /> {/* 5 → 9 */}
			<Pipeline points={[{x: 1150, y: 296}, {x: 1150, y: 350}, {x: 660, y: 350}, {x: 660, y: 480}]} /> {/* 8 → 9 */}
			<Pipeline points={[{x: 940, y: 296}, {x: 940, y: 350}]} /> {/* 7 → 9 */}
			<Pipeline points={[{x: 750, y: 296}, {x: 750, y: 350}]} /> {/* 6 → 9 */}
			<Pipeline points={[{x: 630, y: 576}, {x: 630, y: 600}, {x: 800, y: 600}, {x: 800, y: 480}, {x: 860, y: 480}]} /> {/* 9 → 10 */}
			<Pipeline points={[{x: 900, y: 546}, {x: 900, y: 600}, {x: 960, y: 600}]} /> {/* 10 → 11 */}
			<Pipeline points={[{x: 1000, y: 600}, {x: 1020, y: 600}, {x: 1020, y: 470}, {x: 1060, y: 470}]} /> {/* 11 → 12 */}

			{/* Выходные соединения */}
			<Pipeline points={[{x: 580, y: 510}, {x: 560, y: 510}, {x: 560, y: 520}]} /> {/* 9 →  */}
			<Pipeline points={[{x: 1156, y: 490}, {x: 1200, y: 490}]} /> {/* 12 →  */}

		</div>
	);
}
