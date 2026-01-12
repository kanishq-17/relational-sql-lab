const sizeMap = {
  sm: "w-32 h-10 text-sm",
  md: "w-40 h-12 text-base",
  lg: "w-48 h-14 text-lg",
};

const Button = ({ text = "Button", size = "sm", className = "" }) => {
  return (
    <div
      className={`
        group cursor-pointer mt-5
        rounded-xl bg-neutral-300/95
        shadow-[inset_0px_3px_8px_rgba(0,0,0,0.75)]
        hover:shadow-none
        transition-all duration-200 ease-linear
        ${sizeMap[size]}
        ${className}
      `}
    >
      <button
        className="
          w-full h-full rounded-lg
          shadow-none cursor-pointer
          group-hover:shadow-[inset_0px_-3px_8px_rgba(0,0,0,0.75)]
          transition-all duration-200 ease-linear
          flex items-center justify-center
          font-medium
        "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
