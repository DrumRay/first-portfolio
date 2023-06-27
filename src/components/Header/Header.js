import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { TbSquareRoundedLetterR } from 'react-icons/tb';


import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';


const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px',}}>
          <DiCssdeck size='3rem' /> <Span>Портфолио</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href="#projects">
          <NavLink>Проекты</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech">
          <NavLink>Технологии</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about">
          <NavLink>Обо мне</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/DrumRay'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B0%D1%82%D0%BE%D0%BB%D0%B8%D0%B9-%D0%B1%D0%B0%D0%BA%D1%83%D0%BC-a1270b1a6/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/gruseligerivan/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://rabota.by/resume/4c3a292cff0bed1b170039ed1f455338515331'>
        <TbSquareRoundedLetterR size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
