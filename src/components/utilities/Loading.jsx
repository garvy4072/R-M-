/** @format */

import './Loading.css';
import { Atom } from 'react-loading-indicators';
function Loading() {
	return (
		<div>
			<div className='loader'>
				<Atom
					color='#558fff'
					size='large'
					text=''
					textColor='#ffffff'
				/>
			</div>
		</div>
	);
}

export default Loading;
