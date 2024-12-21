import React, { SVGProps } from 'react';

const SvgWeight2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(33 12.023 11.753)'
					x={11.023}
					y={7.928}
					width={2}
					height={7.65}
					rx={1}
				/>
				<path
					d='M7.5 3h9A4.5 4.5 0 0121 7.5v8a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 15.5v-8A4.5 4.5 0 017.5 3zM6 7.882L8.571 12h6.858L18 7.882C17 5.961 15 5 12 5s-5 .96-6 2.882z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgWeight2;
