import { Preset } from "./types";

const O = true;
const _ = false;

// https://www.youtube.com/watch?v=-FaqC4h5Ftg

export function getPresets(): Preset[] {
  return [
    {
      id: "block",
      description: "Block (Still life)",
      width: 4,
      height: 4,
      grid: [
        [_, _, _, _],
        [_, O, O, _],
        [_, O, O, _],
        [_, _, _, _],
      ],
    },
    {
      id: "blinker",
      description: "Blinker (period 2 Oscillator)",
      width: 5,
      height: 5,
      grid: [
        [_, _, _, _, _],
        [_, _, _, _, _],
        [_, O, O, O, _],
        [_, _, _, _, _],
        [_, _, _, _, _],
      ],
    },
    {
      id: "toad",
      description: "Toad (period 2 Oscillator)",
      width: 6,
      height: 6,
      grid: [
        [_, _, _, _, _, _],
        [_, _, _, _, _, _],
        [_, _, O, O, O, _],
        [_, O, O, O, _, _],
        [_, _, _, _, _, _],
        [_, _, _, _, _, _],
      ],
    },
    {
      id: "beacon",
      description: "Beacon (period 2 Oscillator)",
      width: 6,
      height: 6,
      grid: [
        [_, _, _, _, _, _],
        [_, O, O, _, _, _],
        [_, O, O, _, _, _],
        [_, _, _, O, O, _],
        [_, _, _, O, O, _],
        [_, _, _, _, _, _],
      ],
    },
    {
      id: "pulsar",
      description: "Pulsar (period 3 Oscillator)",
      width: 17,
      height: 17,
      size: 20,
      grid: [
        [...No(17)],
        [...No(17)],
        [...No(4), ...Yes(3), ...No(3), ...Yes(3), ...No(4)],
        [...No(17)],
        [_, _, O, ...No(4), O, _, O, ...No(4), O, _, _],
        [_, _, O, ...No(4), O, _, O, ...No(4), O, _, _],
        [_, _, O, ...No(4), O, _, O, ...No(4), O, _, _],
        [...No(4), ...Yes(3), ...No(3), ...Yes(3), ...No(4)],
        [...No(17)],
        [...No(4), ...Yes(3), ...No(3), ...Yes(3), ...No(4)],
        [_, _, O, ...No(4), O, _, O, ...No(4), O, _, _],
        [_, _, O, ...No(4), O, _, O, ...No(4), O, _, _],
        [_, _, O, ...No(4), O, _, O, ...No(4), O, _, _],
        [...No(17)],
        [...No(4), ...Yes(3), ...No(3), ...Yes(3), ...No(4)],
        [...No(17)],
        [...No(17)],
      ],
    },
    {
      id: "penta-decathlon",
      description: "Penta-decathlon (period 15 Oscillator)",
      width: 11,
      height: 18,
      size: 14,
      grid: [
        [...No(11)],
        [...No(11)],
        [...No(11)],
        [...No(11)],
        [...No(5), O, ...No(5)],
        [...No(5), O, ...No(5)],
        [...No(4), O, _, O, ...No(4)],
        [...No(5), O, ...No(5)],
        [...No(5), O, ...No(5)],
        [...No(5), O, ...No(5)],
        [...No(5), O, ...No(5)],
        [...No(4), O, _, O, ...No(4)],
        [...No(5), O, ...No(5)],
        [...No(5), O, ...No(5)],
        [...No(11)],
        [...No(11)],
        [...No(11)],
        [...No(11)],
      ],
    },
    {
      id: "glider",
      description: "Glider (Spaceship)",
      width: 10,
      height: 10,
      grid: [
        [_, _, _, _, _],
        [_, _, O, _, _],
        [_, _, _, O, _],
        [_, O, O, O, _],
        [_, _, _, _, _],
      ],
    },
    {
      id: "LWSS",
      description: "Light-weight spaceship (LWSS)",
      width: 20,
      height: 9,
      grid: [
        [_, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, O, O, O, O, _, _, _],
        [_, _, _, O, _, _, _, O, _, _, _],
        [_, _, _, _, _, _, _, O, _, _, _],
        [_, _, _, O, _, _, O, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _],
      ],
    },
    {
      id: "MWSS",
      description: "Middle-weight spaceship (MWSS)",
      width: 20,
      height: 11,
      grid: [
        [_, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, O, _, _, _, _, _, _],
        [_, _, _, O, _, _, _, O, _, _, _, _],
        [_, _, _, _, _, _, _, _, O, _, _, _],
        [_, _, _, O, _, _, _, _, O, _, _, _],
        [_, _, _, _, O, O, O, O, O, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _],
      ],
    },
    {
      id: "HWSS",
      description: "Heavy-weight spaceship (HWSS)",
      width: 20,
      height: 11,
      grid: [
        [_, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _],
        [_, _, _, _, _, O, O, _, _, _, _, _, _],
        [_, _, _, O, _, _, _, _, O, _, _, _, _],
        [_, _, _, _, _, _, _, _, _, O, _, _, _],
        [_, _, _, O, _, _, _, _, _, O, _, _, _],
        [_, _, _, _, O, O, O, O, O, O, _, _, _],
        [_, _, _, _, _, _, _, _, _, _, _, _, _],
      ],
    },
    {
      id: "diehard",
      description: "Die Hard (Methuselahs)",
      width: 50,
      height: 50,
      size: 3,
      grid: [
        ...Array(20).fill([false]),
        [...No(20), _, _, _, _, _, _, O, _],
        [...No(20), O, O, _, _, _, _, _, _],
        [...No(20), _, O, _, _, _, O, O, O],
      ],
    },
    {
      id: "acorn",
      description: "Acorn (Methuselahs)",
      width: 200,
      height: 150,
      size: 3,
      grid: [
        ...Array(70).fill([false]),
        [...No(100), _, O, _, _, _, _, _, _],
        [...No(100), _, _, _, O, _, _, _, _],
        [...No(100), O, O, _, _, O, O, O, _],
      ],
    },
    {
      id: "r_pentomino",
      description: "The R-pentomino (Methuselahs)",
      width: 200,
      height: 150,
      size: 3,
      grid: [
        ...Array(80).fill([false]),
        [...No(100), _, O, O],
        [...No(100), O, O, _],
        [...No(100), _, O, _],
      ],
    },
    {
      id: "infinite1",
      description: "Infinite 1",
      width: 200,
      height: 150,
      size: 3,
      grid: [
        ...Array(80).fill([false]),
        [...No(100), _, _, _, _, _, _, O, _, _],
        [...No(100), _, _, _, _, O, _, O, O, _],
        [...No(100), _, _, _, _, O, _, O, _, _],
        [...No(100), _, _, _, _, O, _, _, _, _],
        [...No(100), _, _, O, _, _, _, _, _, _],
        [...No(100), O, _, O, _, _, _, _, _, _],
      ],
    },
    {
      id: "infinite2",
      description: "Infinite 2",
      width: 200,
      height: 150,
      size: 3,
      grid: [
        ...Array(80).fill([false]),
        [...No(100), O, O, O, _, O],
        [...No(100), O, _, _, _, _],
        [...No(100), _, _, _, O, O],
        [...No(100), _, O, O, _, O],
        [...No(100), O, _, O, _, O],
      ],
    },
    {
      id: "infinite3",
      description: "Infinite 3",
      width: 300,
      height: 200,
      size: 3,
      grid: [
        ...Array(100).fill([false]),
        [
          ...No(10),
          ...Yes(8),
          _,
          ...Yes(5),
          ...No(3),
          ...Yes(3),
          ...No(6),
          ...Yes(7),
          _,
          ...Yes(5),
        ],
      ],
    },
    {
      id: "gospelslidergun",
      description: "Gosper glider gun",
      width: 300,
      height: 200,
      size: 3,
      grid: [
        ...Array(30).fill([false]),
        // prettier-ignore
        [...No(30), _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, O, _, _, _, _, _, _, _, _, _, _, _],
        // prettier-ignore
        [...No(30), _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, O, _, O, _, _, _, _, _, _, _, _, _, _, _],
        // prettier-ignore
        [...No(30), _, _, _, _, _, _, _, _, _, _, _, _, O, O, _, _, _, _, _, _, O, O, _, _, _, _, _, _, _, _, _, _, _, _, O, O],
        // prettier-ignore
        [...No(30), _, _, _, _, _, _, _, _, _, _, _, O, _, _, _, O, _, _, _, _, O, O, _, _, _, _, _, _, _, _, _, _, _, _, O, O],
        // prettier-ignore
        [...No(30), O, O, _, _, _, _, _, _, _, _, O, _, _, _, _, _, O, _, _, _, O, O, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        // prettier-ignore
        [...No(30), O, O, _, _, _, _, _, _, _, _, O, _, _, _, O, _, O, O, _, _, _, _, O, _, O, _, _, _, _, _, _, _, _, _, _, _],
        // prettier-ignore
        [...No(30), _, _, _, _, _, _, _, _, _, _, O, _, _, _, _, _, O, _, _, _, _, _, _, _, O, _, _, _, _, _, _, _, _, _, _, _],
        // prettier-ignore
        [...No(30), _, _, _, _, _, _, _, _, _, _, _, O, _, _, _, O, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
        // prettier-ignore
        [...No(30), _, _, _, _, _, _, _, _, _, _, _, _, O, O, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
      ],
    },
  ];
}

function No(nr: number) {
  return Array(nr).fill(_);
}
function Yes(nr: number) {
  return Array(nr).fill(O);
}
