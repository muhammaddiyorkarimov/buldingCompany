import './Partners.css'
import { useTranslation } from 'react-i18next';

import partner1 from '../../images/partner1.png'
import partner2 from '../../images/partner2.png'
import partner3 from '../../images/partner3.png'
import partner4 from '../../images/partner4.png'
import partner5 from '../../images/partner5.png'
import partner6 from '../../images/partner6.png'
import partner7 from '../../images/partner7.png'
import partner8 from '../../images/partner8.png'

function Partners() {
	const { t } = useTranslation();
	return (
		<div className='partners'>
			<div className="container">
				<div className="main-title">
					<div className="main-title">{t('partners_title')} <div className="title">{t('partners_info')}</div></div>
					<div className="partner-items">
						<img src={partner1} alt="" />
						<img src={partner2} alt="" />
						<img src={partner3} alt="" />
						<img src={partner4} alt="" />
						<img src={partner5} alt="" />
						<img src={partner6} alt="" />
						<img src={partner7} alt="" />
						<img src={partner8} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners