import React, { SVGProps } from 'react';

const SvgRight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.657 10V5.67a.75.75 0 00-1.248-.56l-7.157 6.362a.75.75 0 00-.032 1.09l7.157 7.158a.75.75 0 001.28-.53V15c1.347-.081 4.178-.084 8.492-.01a.5.5 0 00.508-.499v-3.986a.5.5 0 00-.505-.5c-5.13.05-7.962.048-8.495-.005z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgRight;
