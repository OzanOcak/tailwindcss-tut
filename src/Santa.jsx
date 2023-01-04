const Santa = ({ santa }) => {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img
        src={santa.imgUrl}
        alt={santa.imgAlt}
        className="h-28 w-28 flex-shrink-0 rounded-[4rem]"
      />
      <div className="px-1 py-4 space-y-1">
        <h3 className="text-lg font-semibold text-gray-800">{santa.name}</h3>
        <p className="text-gray-600">fun: {santa.fun}</p>
        <p className="text-gray-600">hapiness: {santa.hapiness}</p>
      </div>
    </div>
  );
};
export default Santa;
