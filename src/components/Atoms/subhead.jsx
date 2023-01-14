export default function SubHead({ children, width, style }) {
  return <h2 className={`${width ? width : "w-full"} font-head text-[2rem] font-medium text-primary-100 ${style}`}>{children}</h2>
}