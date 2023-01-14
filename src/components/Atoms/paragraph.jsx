export default function Paragraph({ children, fontSize, color}) {
  return <p className={`font-body ${color ? color : "text-black-300"} ${fontSize}`}>{children}</p>
}