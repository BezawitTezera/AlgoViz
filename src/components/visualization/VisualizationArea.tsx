import React from "react";
import ArrayVisualizer from "./ArrayVisualizer";
import TreeVisualizer from "./TreeVisualizer";
import GraphVisualizer from "./GraphVisualizer";
import DefaultVisualize from "./DefaultVisualize";
import { AlgorithmName } from "../dataControls/AlgorithmSelector";

const arrayAlgorithms: AlgorithmName[] = [
  "binarySearch",
  "linearSearch",
  "bubbleSort",
  "insertionSort",
  "mergeSort",
  "quickSort",
  "selectionSort",
  "Fibonacci",
  "knapsack",
  "longestCommonSubsequence",
];

const treeAlgorithms: AlgorithmName[] = [
  "binaryTreeTraversal",
  "bstDeletion",
  "bstInsertion",
  "nQueens",
  "sudokuSolver",
];

const graphAlgorithms: AlgorithmName[] = ["aStar", "bfs", "dfs", "dijkstra"];

interface VisualizationAreaProps {
  algo: AlgorithmName | null;
  speed: number;
  inputData: string | null;
}

function matchType(
  algo: AlgorithmName | null,
  inputData: string | null,
  speed: number
) {
  if (algo === null || inputData === null) return <DefaultVisualize />;

  if (arrayAlgorithms.includes(algo)) {
    return <ArrayVisualizer inputData={inputData} speed={speed} />;
  } else if (treeAlgorithms.includes(algo)) {
    return <TreeVisualizer inputData={inputData} speed={speed} />;
  } else if (graphAlgorithms.includes(algo)) {
    return <GraphVisualizer inputData={inputData} speed={speed} />;
  }

  return <DefaultVisualize />; // Default fallback
}

const VisualizationArea: React.FC<VisualizationAreaProps> = ({
  algo,
  speed,
  inputData,
}) => {
  return <div className="mt-10">{matchType(algo, inputData, speed)}</div>;
};

export default VisualizationArea;
