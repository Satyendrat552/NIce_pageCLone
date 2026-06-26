const Button = ({name}) => {
  return (
    <button className=" text-[gray]  px-6 py-2 rounded-lg hover:bg-zinc-300 transition">
      {name}
     </button>
  );
};

export default Button;