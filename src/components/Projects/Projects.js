import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Stack } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle main>Проекты</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <Stack>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </Stack>
          <UtilityList>
            <ExternalLinks href={visit}>Исходный код</ExternalLinks>
            <ExternalLinks href={source}>Ссылка на сайт</ExternalLinks>
          </UtilityList>
        </BlogCard>
      )) }
    </GridContainer>
  </Section>
);

export default Projects;