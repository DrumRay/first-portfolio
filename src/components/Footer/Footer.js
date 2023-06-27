import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { TbSquareRoundedLetterR } from 'react-icons/tb';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Телефон</LinkTitle>
          <LinkItem href='tel:+375 29 629-97-21'>+375 29 629-97-21</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:drumray1@gmail.com'>drumray1@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        <LinkColumn>
          <LinkTitle>YouTube</LinkTitle>
          <LinkItem href='https://www.youtube.com/channel/UC5v85WiA6SvwT1lQ5hNZXzg'>Drum Ray</LinkItem>
        </LinkColumn>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
