'use client'
import Image from "@/node_modules/next/image";
import Main from '../foto/Main.svg';
import '/scss/mainPictire.scss';
import { flash } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Flash = styled.div`animation: 10s ${keyframes`${flash}`} infinite`;

export default function MainPicture() {
  return (
    <div className="mainPicture">
      <Flash><Image src={Main} width={600} height={200} alt='Logo Rick and Morti'/></Flash>
    </div>
  )
}
