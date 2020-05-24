import { Preset } from "./types";

export function getPresets(): Preset[] {
  return [
    {
      id: "block",
      description: "Block (Still life)",
      width: 4,
      height: 4,
      grid: [
        [false, false, false, false],
        [false, true, true, false],
        [false, true, true, false],
        [false, false, false, false],
      ],
    },
    {
      id: "blinker",
      description: "Blinker (period 2 Oscillator)",
      width: 5,
      height: 5,
      grid: [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, true, true, true, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
      ],
    },
    {
      id: "toad",
      description: "Toad (period 2 Oscillator)",
      width: 6,
      height: 6,
      grid: [
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
        [false, false, true, true, true, false],
        [false, true, true, true, false, false],
        [false, false, false, false, false, false],
        [false, false, false, false, false, false],
      ],
    },
    {
      id: "glider",
      description: "Glider (Spaceship)",
      width: 5,
      height: 5,
      grid: [
        [false, false, false, false, false],
        [false, false, true, false, false],
        [false, false, false, true, false],
        [false, true, true, true, false],
        [false, false, false, false, false],
      ],
    },
    {
      id: "r_pentomino",
      description: "The R-pentomino (Methuselahs)",
      width: 200,
      height: 100,
      size: 3,
      grid: [
        ...Array(20).fill([false]),
        [...Array(15).fill(false), false, true, true],
        [...Array(15).fill(false), true, true, false],
        [...Array(15).fill(false), false, true, false],
      ],
    },
  ];
}
