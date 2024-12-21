import React, { SVGProps } from 'react';

const SvgFileDone = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2zm5.018 13.75c.24 0 .48-.096.67-.287l3.834-3.834a.926.926 0 000-1.341.926.926 0 00-1.341 0l-3.163 3.162-1.246-1.246c-.335-.383-.958-.383-1.341 0a.926.926 0 000 1.342l1.916 1.917a.946.946 0 00.671.287z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M10.875 15.75a.946.946 0 01-.67-.287l-1.918-1.917a.926.926 0 010-1.342c.384-.383 1.007-.383 1.342 0l1.246 1.246 3.162-3.162a.926.926 0 011.342 0 .926.926 0 010 1.341l-3.833 3.834a.946.946 0 01-.671.287z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgFileDone;
