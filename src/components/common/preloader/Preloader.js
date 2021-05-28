import './Preloader.css';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
	return (
		<div className="preloader">
			<img src={preloader} alt="Preloader" />
		</div>
	)
}

export default Preloader;