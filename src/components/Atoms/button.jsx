export default function MainButton({ children, primary }) {
  return (
    <button
      className={`${
        primary
          ? "border border-primary-100 bg-primary-100 text-tertiary-200"
          : "border border-primary-100 bg-tertiary-300 text-primary-100"
      } p-5 text-lg uppercase font-body font-bold md:px-[34px] md:py-5`}
    >
      {children}
    </button>
  );
}
