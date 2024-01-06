type Props={
  color:string
}

export default function CartIcon({color}: Props) {
  return (
    <svg
      style={{ paddingRight: 10 }}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke= {color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="feather feather-shopping-cart"
    >
      <circle cx={9} cy={21} r={1} />
      <circle cx={20} cy={21} r={1} />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}
