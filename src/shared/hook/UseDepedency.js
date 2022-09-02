import { useContext } from "react";
import { DependencyContext } from "../context/DepedencyContext";

export function useDependency() {
  return useContext(DependencyContext);
}
