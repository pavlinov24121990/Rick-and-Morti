'use client'
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useEffect, useState } from "react";
import Logo from '../foto/Logo.svg';
import Off from '../foto/Off.svg';
import MenuExtra from '../foto/MenuExtra.svg';
import '../scss/navBar.scss';
import { rotateOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { NavigatePanelClass } from "@/helpers/isOnLocationsPage";
import { usePathname } from "next/navigation";

const Flashe = styled.div`animation: 10s ${keyframes`${rotateOut}`} infinite`;

export default function NavBar() {

  const router = usePathname();
  
  const [navLink, setNavLink] = useState<string>("Characters")
  const [extraMenu, setExtraMenu] = useState<boolean>(false)

  useEffect(() => {
    setNavLink(NavigatePanelClass(router))
  }, [router]);

  const clickExtraMenu = ():void => {
    extraMenu ? setExtraMenu(false) : setExtraMenu(true)
  }

  return (
    <div className="navbar_menu">
      <div className="logo">
        <Flashe><Image src={Logo} width={46} height={49} alt='Logo Rick and Morti' /></Flashe>
      </div>
      <div className={extraMenu ? 'active_menu' : 'menu'}>
        <ul>
          <li>
            <Link onClick={clickExtraMenu} className={navLink === "Characters" ? "active" : ""} href='/'>Characters</Link>
          </li>
          <li>
            <Link onClick={clickExtraMenu} className={navLink === "Locations" ? "active" : ""} href='/locations'>Locations</Link>
          </li>
          <li>
            <Link onClick={clickExtraMenu} className={navLink === "Episodes" ? "active" : ""} href='/episodes'>Episodes</Link>
          </li>
        </ul>
      </div>
      <div className='extraMenu'>
        <button onClick={clickExtraMenu}>
          <Image src={extraMenu ? Off : MenuExtra} width={24} height={24} alt='Logo Rick and Morti' />
        </button>
      </div>
    </div>
  )
}
