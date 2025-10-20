import React from "react";
import { Apparatus } from "../components/Apparatus";
import { Pump } from "../components/Pump";
import { Collector } from "../components/Collector";
import { Filter } from "../components/Filter";
import { Pipeline } from "../components/Pipeline";

export default function SimulationTab() {
  return (
    <div className="relative w-[1200px] h-[600px] border border-gray-300 bg-white rounded-2xl shadow-md p-6 overflow-hidden">
      {/* Верхний ряд */}
      <Apparatus id={1} name="Аппарат 1: Углеводородная фаза" x={50} y={50} />
      <Apparatus id={2} name="Аппарат 2: Водная фаза" x={200} y={50} />
      <Apparatus id={5} name="Аппарат 5: Инициатор (K₂S₂O₈)" x={400} y={50} />
      <Apparatus id={6} name="Аппарат 6: Аммиачная вода" x={550} y={50} />
      <Apparatus id={7} name="Аппарат 7: Сульфит натрия" x={700} y={50} />
      <Apparatus id={8} name="Аппарат 8: Стабилизатор" x={850} y={50} />

      {/* Нижний ряд */}
      <Apparatus id={3} name="Аппарат 3: Смеситель" x={150} y={300} />
      <Pump id={4} x={350} y={310} />
      <Apparatus id={9} name="Аппарат 9: Полимеризатор" x={500} y={300} />
      <Collector id={10} x={700} y={300} />
      <Pump id={11} x={850} y={310} />
      <Filter id={12} x={950} y={300} />

      {/* Соединения */}
      <Pipeline from={{ x: 100, y: 130 }} to={{ x: 170, y: 330 }} /> {/* 1 → 3 */}
      <Pipeline from={{ x: 220, y: 130 }} to={{ x: 170, y: 330 }} /> {/* 2 → 3 */}
      <Pipeline from={{ x: 170, y: 330 }} to={{ x: 380, y: 330 }} /> {/* 3 → 4 */}
      <Pipeline from={{ x: 380, y: 330 }} to={{ x: 520, y: 330 }} /> {/* 4 → 9 */}
      <Pipeline from={{ x: 430, y: 130 }} to={{ x: 520, y: 330 }} /> {/* 5 → 9 */}
      <Pipeline from={{ x: 580, y: 130 }} to={{ x: 520, y: 330 }} /> {/* 6 → 9 */}
      <Pipeline from={{ x: 730, y: 130 }} to={{ x: 520, y: 330 }} /> {/* 7 → 9 */}
      <Pipeline from={{ x: 880, y: 130 }} to={{ x: 520, y: 330 }} /> {/* 8 → 9 */}
      <Pipeline from={{ x: 520, y: 330 }} to={{ x: 720, y: 330 }} /> {/* 9 → 10 */}
      <Pipeline from={{ x: 720, y: 330 }} to={{ x: 870, y: 330 }} /> {/* 10 → 11 */}
      <Pipeline from={{ x: 870, y: 330 }} to={{ x: 970, y: 330 }} /> {/* 11 → 12 */}
    </div>
  );
}
