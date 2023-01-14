export default function SubHead({ children, width }) {
  return <h2 className={`${width ? width : "w-full"} font-head text-[2rem] font-medium text-primary-100`}>{children}</h2>
}