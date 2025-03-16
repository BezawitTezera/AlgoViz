import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import {
  nQueens,
  sudokuSolver,
  Fibonacci,
  knapsack,
  longestCommonSubsequence,
  aStar,
  bfs,
  dfs,
  dijkstra,
  binarySearch,
  linearSearch,
  bubbleSort,
  mergeSort,
  quickSort,
  selectionSort,
  insertionSort,
  binaryTreeTraversal,
  bstDeletion,
  bstInsertion,
} from "../../utils/helpers";

// Define types
type AlgorithmCategoryKey =
  | "All Types"
  | "BackTracking"
  | "Dynamic Programming"
  | "Graph"
  | "Searching"
  | "Sorting"
  | "Tree";

type AlgorithmName =
  | "nQueens"
  | "sudokuSolver"
  | "Fibonacci"
  | "knapsack"
  | "longestCommonSubsequence"
  | "aStar"
  | "bfs"
  | "dfs"
  | "dijkstra"
  | "binarySearch"
  | "linearSearch"
  | "bubbleSort"
  | "insertionSort"
  | "mergeSort"
  | "quickSort"
  | "selectionSort"
  | "binaryTreeTraversal"
  | "bstDeletion"
  | "bstInsertion";

type AlgorithmFunction = (...args: any[]) => any;

// Map categories to algorithm names
const algorithmCategories: Record<AlgorithmCategoryKey, AlgorithmName[]> = {
  "All Types": [
    "nQueens",
    "sudokuSolver",
    "Fibonacci",
    "knapsack",
    "longestCommonSubsequence",
    "aStar",
    "bfs",
    "dfs",
    "dijkstra",
    "binarySearch",
    "linearSearch",
    "bubbleSort",
    "insertionSort",
    "mergeSort",
    "quickSort",
    "selectionSort",
    "binaryTreeTraversal",
    "bstDeletion",
    "bstInsertion",
  ],
  BackTracking: ["nQueens", "sudokuSolver"],
  "Dynamic Programming": ["Fibonacci", "knapsack", "longestCommonSubsequence"],
  Graph: ["aStar", "bfs", "dfs", "dijkstra"],
  Searching: ["binarySearch", "linearSearch"],
  Sorting: [
    "bubbleSort",
    "insertionSort",
    "mergeSort",
    "quickSort",
    "selectionSort",
  ],
  Tree: ["binaryTreeTraversal", "bstDeletion", "bstInsertion"],
};

// Map algorithm names to functions
const algorithmMap: Record<AlgorithmName, AlgorithmFunction> = {
  nQueens,
  sudokuSolver,
  Fibonacci,
  knapsack,
  longestCommonSubsequence,
  aStar,
  bfs,
  dfs,
  dijkstra,
  binarySearch,
  linearSearch,
  bubbleSort,
  insertionSort,
  mergeSort,
  quickSort,
  selectionSort,
  binaryTreeTraversal,
  bstDeletion,
  bstInsertion,
};

const AlgorithmSelector: React.FC = () => {
  const [algorithmType, setAlgorithmType] =
    useState<AlgorithmCategoryKey>("All Types");
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<AlgorithmName | null>(null);

  const handleAlgorithmSelection = (algo: AlgorithmName) => {
    setSelectedAlgorithm(algo);
    console.log(`Selected Algorithm: ${algo}`);
  };

  return (
    <div className="mt-4">
      {/* Algorithm Type Selection */}
      <h2 className="text-white text-xl mt-4 mb-2">Algorithm Type</h2>
      <Listbox value={algorithmType} onChange={setAlgorithmType}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md border border-gray-300">
            <span className="block truncate">{algorithmType}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white shadow-lg max-h-60 border border-gray-200 z-50">
            {Object.keys(algorithmCategories).map((category) => (
              <Listbox.Option
                key={category}
                value={category as AlgorithmCategoryKey}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-bold" : ""
                      }`}
                    >
                      {category}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CheckIcon className="h-5 w-5 text-blue-600" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>

      {/* Algorithm Selection */}
      <h2 className="text-white text-xl mt-3 mb-2">Select Algorithm</h2>
      <Listbox value={selectedAlgorithm} onChange={handleAlgorithmSelection}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md border border-gray-300">
            <span className="block truncate">
              {selectedAlgorithm || "Select Algorithm"}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white shadow-lg max-h-60 border border-gray-200">
            {algorithmCategories[algorithmType].map((algo) => (
              <Listbox.Option
                key={algo}
                value={algo}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-bold" : ""
                      }`}
                    >
                      {algo}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CheckIcon className="h-5 w-5 text-blue-600" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default AlgorithmSelector;
