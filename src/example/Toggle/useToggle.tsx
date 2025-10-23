import { useState, useCallback } from 'react';

// --- 1. ANATOMÍA DEL CUSTOM HOOK (useToggle) ---
/**
 * Un hook simple para manejar un estado booleano (verdadero/falso).
 * @param valorInicial - El valor con el que debe empezar (default: false)
 * @returns Un array con dos elementos:
 * [0] valor: El estado booleano actual (true / false)
 * [1] toggleValor: Una función para invertir el estado
 */
export function useToggle(valorInicial: boolean = false): [boolean, () => void] {
  
  // --- REGLA: "PUEDE llamar a otros Hooks" ---
  // Usa useState por dentro para manejar el estado.
  const [valor, setValor] = useState<boolean>(valorInicial);

  // Usamos 'useCallback' para asegurarnos de que la función no se
  // recree en cada render, aunque en este caso simple no es
  // estrictamente necesario, es una buena práctica.
  const toggleValor = useCallback(() => {
    // La función 'toggle' invierte el valor anterior.
    setValor((valorAnterior) => !valorAnterior);
  }, []); // El array vacío significa que la función nunca cambia.

  // Devuelve el valor y la función para cambiarlo,
  // igual que 'useState' pero con lógica personalizada.
  return [valor, toggleValor];
}
