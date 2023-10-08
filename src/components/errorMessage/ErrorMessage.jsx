import img from './error.gif'

function ErrorMessage() {
	return (
		<div>
			<img
				src={img}
				style={{
					display: 'block',
					width: '225px',
					height: '225px',
					objectFit: 'contains',
					margin: '0 auto'
				}}
				alt='Error'
			/>
		</div>
	);
}

export default ErrorMessage;