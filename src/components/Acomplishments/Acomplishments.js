// дополнить потом количественными достижениями, помимо кол-ва проектов ещё подписчиков на ютубе например, кол-во лет опыта работы (1 год звучит не солидно но всё же) и т.д.

import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Готовых проекта'},
  { number: 4, text: 'Языка: RU,BE,EN,DE'},
  { number: 2, text: 'Года опыта работы'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Личные достижения
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
