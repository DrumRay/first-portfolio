import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Приветствую вас!        
      </SectionTitle>
      <SectionText>
        Я - молодой и мотивированный начинающий фронтенд-разработчик, находящийся в активном поиске возможностей для профессионального роста.
      </SectionText>
      <Button onClick={() => window.location = "https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%B1%D0%B0%D0%BA%D1%83%D0%BC-a1270b1a6/"}>Узнать больше</Button>
    </LeftSection>
  </Section>
);

export default Hero;