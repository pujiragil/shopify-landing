export default function SubHead({ children, width, style }) {
  return <h2 className={`${width ? width : "w-full"} font-head text-[2rem] md:text-[2.5rem] lg:text-[50px] font-medium text-primary-100 ${style}`}>{children}</h2>
}