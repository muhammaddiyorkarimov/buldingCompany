import React, { useEffect } from 'react';
import './OurResults.css';
import { useTranslation } from 'react-i18next'; 

function OurResults() {
  const { t } = useTranslation(); // useTranslation hookdan t funksiyasini olish

  useEffect(() => {
    const counters = document.querySelectorAll('.counter-item span');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className='our-results'>
      <div className="container">
        <div className="counter2">
          <div className="counter-item">
            <span data-target="9">0</span>
            <p>{t('years_of_experience')}</p>
          </div>
          <div className="counter-item">
            <span data-target="13">0</span>
            <p>{t('cool_designers_and_architects')}</p>
          </div>
          <div className="counter-item">
            <span data-target="103">0</span>
            <p>{t('projects_in_all_regions')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurResults;
