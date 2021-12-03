const Suggestions = ({ suggestions }) => {
  suggestions = suggestions.slice(0, 5);
  return (
    <div className="ml-10 mt-4">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-gray-400 text-sm font-bold">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.email}
          className="flex justify-between items-center mt-3"
        >
          <img
            src={profile.picture.medium}
            className="w-10 h-10 rounded-full border p-[2px]"
            alt=""
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.name.first}</h2>
            <h3 className="text-xs text-gray-400">Works at Instagram</h3>
          </div>
          <button className="text-blue-400 text-xs font-semibold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
