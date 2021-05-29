import './FormControl.css'

export const Textarea = ({ input, meta, ...props }) => {
	return (
		<div className={`formControl  ${meta.error && meta.touched ? "error" : ''}`}>
			<div>
				<textarea {...input} {...props}></textarea>
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}

export const Input = ({ input, meta, ...props }) => {
	return (
		<div className={`formControl  ${meta.error && meta.touched ? "error" : ''}`}>
			<div>
				<input {...input} {...props}></input>
			</div>
			{meta.error && meta.touched && <span>{meta.error}</span>}
		</div>
	)
}