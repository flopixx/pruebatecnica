import React from "react";
import "./Home.css";
import vitalinea from "../../images/vitalinea1.png";
import vitalinea3 from "../../images/vitalinea3.png";
import vitalinea2 from "../../images/vitalinea2.png";
import arrow from "../../images/arrow.svg";
import Button from "../Button/Button";

const Home = () => {
	return (
		<div className='clip'>
			<div className='home-container'>
				<div className='img-vitalinea'>
					<img src={vitalinea} alt={vitalinea} className='img-vitalinea' />
				</div>

				<div className='home-details'>
					<div className='flavors'>
						<h3>Sabor:</h3>
						<div className='flavor'>Fresa </div>
						<div className='flavor'>Guayaba</div>
						<div className='flavor'>Toronja</div>
					</div>
					<div className='home-titles'>
						<h1 className='title'>Vitalínea® Bebible Fresa 217 gr.</h1>
						<p className='home-paragraph'>
							¡La presentación ideal para llevar contigo! Vitalínea bebible es
							la opción si eres de las personas que siempre están activas y
							quieren probar algo sano, rico y práctico.
						</p>
						<Button message='Comprar en walmart' />
						<div className='home-images'>
							<img
								src={vitalinea3}
								alt={vitalinea3}
								className='home-images-vitalinea'
							/>
							<img
								src={vitalinea2}
								alt={vitalinea2}
								className='home-images-vitalinea'
							/>
						</div>
						<div className='arrow'>
							<img src={arrow} alt={arrow} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
