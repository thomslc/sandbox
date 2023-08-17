import { memo, SVGProps } from 'react';

const CaretdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.5 16.25L6.25 10L12.5 3.75'
      stroke='#282A31'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CaretdownIcon);
export { Memo as CaretdownIcon };
