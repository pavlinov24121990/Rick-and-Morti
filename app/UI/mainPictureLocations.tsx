'use client'
import Image from "@/node_modules/next/image";
import MainLocations from '/foto/MainLocations.svg';
import '/scss/mainPictire.scss';
import { flash } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { usePathname } from "next/navigation";
import EpisodMain from '/foto/EpisodMain.svg';
import Main from '/foto/Main.svg';

const Flash = styled.div`animation: 10s ${keyframes`${flash}`} infinite`;

export default function MainPictureLocations() {
  const router = usePathname();

  const navImage = () => {
    if (router.includes('/locations')) {
      return MainLocations
    } else if (router.includes('/episodes')) {
      return EpisodMain
    } else {
      return Main
    }
  }

  return (
    <div className="mainPicture">
      <Flash><Image src={navImage()} width={600} height={200} alt='Logo Rick and Morti'/></Flash>
    </div>
  )
}
