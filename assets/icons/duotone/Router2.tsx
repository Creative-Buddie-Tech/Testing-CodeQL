import React, { SVGProps } from 'react';

const SvgRouter2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={3} y={13} width={18} height={7} rx={2} />
				<path
					d='M17.403 9.55l-1.543 1.272A4.987 4.987 0 0012 9a4.987 4.987 0 00-3.85 1.81L6.61 9.535A6.986 6.986 0 0112 7c2.117 0 4.082.947 5.403 2.55zm3.065-2.571L18.93 8.256A8.978 8.978 0 0012 5a8.978 8.978 0 00-6.922 3.248L3.54 6.968A10.977 10.977 0 0112 3c3.315 0 6.392 1.477 8.468 3.979z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgRouter2;
