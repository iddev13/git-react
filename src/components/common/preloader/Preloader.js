import './Preloader.css';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
	return (
		<div className="peloader">
			<img src={preloader} alt="Preloader" />
		</div>
	)
}

export default Preloader;