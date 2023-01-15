export default function MainButton({ children, primary }) {
  return (
    <button
      className={`${
        primary
          ? "border border-primary-100 bg-primary-100 text-tertiary-200"
          : "border border-primary-100 bg-tertiary-300 text-primary-100"
      } p-5 text-lg uppercase font-body font-bold md:px-[34px] md:py-5 lg:w-full`}
    >
      {children}
    </button>
  );
}

export function Button({ children, style }) {
  return (
    <button
      className={`w-fit border border-primary-100 py-3.5 px-6 text-primary-100 font-body font-medium hover:bg-primary-100 hover:text-white transition-all duration-200 ease-in`}
    >
      {children}
    </button>
  );
}
