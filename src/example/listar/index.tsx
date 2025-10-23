import ListaDeFrases from "./listPhrase";
import ListaDePersonajes from "./listCharacter";
//--- Componente Principal para mostrarlos lado a lado ---
export default function Example_1() {
  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Problema: Lógica de Fetch Repetida
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Ambos componentes mezclan la lógica de la vista con la lógica de datos. 
        Los estados de <code>data</code>, <code>loading</code>, <code>error</code> y el <code>useEffect</code> son idénticos.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <ListaDePersonajes />
        </div>
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <ListaDeFrases />
        </div>
      </div>
    </div>
  );
}
