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
      Я работал с различными технологиями в области веб-разработки, включая фронтенд, дизайн и частично фулл-стек.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br/>
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
          <ListTitle>Full-Stack</ListTitle>
          <ListParagraph>
            Wordpress <br/>
            NextJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
