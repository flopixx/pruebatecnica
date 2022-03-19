import React from "react";
import "./Family.css";
import vitalinea4 from "../../images/vitalinea4.png";
import vitalinea5 from "../../images/vitalinea5.png";
import vitalinea6 from "../../images/vitalinea6.png";

const Family = () => {
	return (
		<>
			<section className='section-family'>
				<h2 className='section-family-title'>LA FAMILIA VITALÍNEA</h2>
				<div className='section-family-vitalinea'>
					<div className='vitalinea'>
						<img src={vitalinea5} alt={vitalinea5} />
						<small>Vitalínea Griego</small>
					</div>

					<div className='vitalinea'>
						<img src={vitalinea4} alt={vitalinea4} />
						<small>Vitalínea sin Azúcar</small>
					</div>
					<div className='vitalinea'>
						<img src={vitalinea6} alt={vitalinea6} />
						<small>Vitalínea Bebible</small>
					</div>
				</div>
			</section>
		</>
	);
};

export default Family;
