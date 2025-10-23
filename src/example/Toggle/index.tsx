import {useToggle} from './useToggle';
export default function Example_2() {

  const [esVisible, toggleVisibilidad] = useToggle();
  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl text-center">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Anatomía de un Hook
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Este es el "Hola Mundo" de los Custom Hooks.
        </p>
        
        {/* El botón usa la función 'toggleVisibilidad' de nuestro hook */}
        <button
          onClick={toggleVisibilidad}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          {esVisible ? 'Ocultar' : 'Mostrar'} Texto
        </button>

        {/* El texto se muestra o se oculta basado en el 'esVisible' de nuestro hook */}
        {esVisible && (
          <div className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-400 rounded-md">
            <p className="text-blue-800 font-medium">
              ¡Hola, Mundo!
            </p>
            <p className="text-blue-700 text-sm mt-2">
              Mi visibilidad es controlada por el hook <code>useToggle</code>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}