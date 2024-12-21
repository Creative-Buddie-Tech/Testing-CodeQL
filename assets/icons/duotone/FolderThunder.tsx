import React, { SVGProps } from 'react';

const SvgFolderThunder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 7H10L7.44 4.44A1.5 1.5 0 006.378 4H3.5A1.5 1.5 0 002 5.5v14A1.5 1.5 0 003.5 21z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M12.67 18.788l3.3-4.949a.75.75 0 00-.624-1.166h-2.687V9.7a.75.75 0 00-1.374-.416l-3.299 4.949a.75.75 0 00.624 1.166h2.687v2.973a.75.75 0 001.374.416z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgFolderThunder;
