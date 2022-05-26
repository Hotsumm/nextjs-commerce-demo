interface CheckProps {
  color: string;
}

export default function Check({ color }: CheckProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color}>
      <path
        d="M20 6L9 17L4 12"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
