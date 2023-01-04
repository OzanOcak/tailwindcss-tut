const Santa = () => {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img
        src="/santa1.jpeg"
        alt="santa1"
        className="h-28 w-28 flex-shrink-0 rounded-[4rem]"
      />
      <div className="px-1 py-4 space-y-1">
        <h3 className="text-lg font-semibold text-gray-800">Mr. Santa 1</h3>
        <p className="text-gray-600">hapiness: {}</p>
        <p className="text-gray-600">panctuation: {}</p>
      </div>
    </div>
  );
};
export default Santa;
