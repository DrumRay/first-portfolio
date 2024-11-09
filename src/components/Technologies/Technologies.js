import React from 'react';
import { DiReact } from 'react-icons/di';
import { BsWordpress } from 'react-icons/bs';
import { CgFigma } from 'react-icons/cg';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Технологии</SectionTitle>
    <SectionText>
      Я работал с различными технологиями в области веб-разработки, включая фронтенд и дизайн. Последний год активно работаю с различными CMS системами.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br/>
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <CgFigma size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma <br/>
            Bootstrap & Tailwindcss
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsWordpress size="2.5rem"/>
        <ListContainer>
          <ListTitle>CMS</ListTitle>
          <ListParagraph>
            Wordpress <br/>
            Tilda <br/>
            1C-Bitrix <br/>
            OpenCart
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
