const Story = ({ img, username }) => {
  return (
    <div>
      <img
        className="rounded-full w-14 h-14 p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition-all transform duration-200 ease-out "
        src={img}
        alt=""
      />
      <p className="text-xs w-14 text-center truncate">{username}</p>
    </div>
  );
};

export default Story;
