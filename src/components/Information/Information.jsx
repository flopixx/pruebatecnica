import React from "react";
import "./Information.css";

const Information = () => {
	return (
		<section className='information-container'>
			<div className='information-wrapper'>
				<h2>Información nutrimental</h2>
				<p className='information-vitalinea'>
					Vitalínea® Bebible Guayaba 217gr Valor promedio por porción de 217gr
					Porciones por envase: 1
				</p>

				<h4>Ingredientes:</h4>
				<p className='information-ingredients'>
					Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca.
					3.5% preparado de fruta guayaba (acesulfame K y sucralosa
					(27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos
					lácticos.
				</p>
			</div>
			<div className='information-items'>
				<div className='information-items'>
					<ul>
						<li> Contenido energético kJ/kcal</li>
						<li>Proteínas (g)</li>
						<li>Grasas (lípidos) (g)</li>
						<li>Grasas saturadas (g)</li>
						<li>Carbohidratos(Hidratos de carbono)(g)</li>
						<li>Azúcares(g)</li>
						<li>Azúcares añadidos (g)</li>
						<li>Fibra dietética (g) </li>
						<li>Sodio (mg)</li>
						<li>Calcio (mg)</li>
						<li>%VNR*</li>
					</ul>
					<div>
						<ul>
							<li>413,2/97,9</li>
							<li>5.3</li>
							<li>2.1</li>
							<li>1.4</li>
							<li>12.4</li>
							<li>7.7</li>
							<li>0.1</li>
							<li>0.0</li>
							<li>92.7</li>
							<li>199.6</li>
							<li>22</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Information;
