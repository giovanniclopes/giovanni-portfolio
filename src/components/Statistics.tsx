export default function Statistics() {
  return (
    <div
      className="px-24 pt-32 pb-5 w-full mbl:px-12"
    >
      <div className="flex bg-gray-400 rounded-lg p-12">
        <div className="grid grid-cols-4 items-center justify-between w-full mbl:grid-cols-1 mbl:gap-y-12 mbl:text-center mbl:text-lg">
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-red-500 font-bold text-5xl">+4</h4>
            <p>Anos de experiência</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-red-500 font-bold text-5xl">+6</h4>
            <p>Projetos desenvolvidos</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4 className="text-red-500 font-bold text-5xl">+7</h4>
            <p>Habilidades de desenvolvimento</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h4
              className="text-red-500 font-bold text-5xl"
              aria-label="infinity"
            >
              ∞
            </h4>
            <p>Vontade de aprender</p>
          </div>
        </div>
      </div>
    </div>
  );
}
