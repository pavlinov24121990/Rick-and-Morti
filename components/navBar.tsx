'use client'
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useState } from "react";
import Logo from '../foto/Logo.svg';
import '../scss/navBar.scss';
import { rotateOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Flashe = styled.div`animation: 10s ${keyframes`${rotateOut}`} infinite`;

export default function NavBar() {
  
  const [navLink, setNavLink] = useState<string>("Characters")

  return (
    <div className="navbar">
      <div>
        <Flashe><Image src={Logo} width={46} height={49} alt='Logo Rick and Morti' /></Flashe>
      </div>
      <div>
        <ul>
          <li>
            <Link onClick={() => setNavLink("Characters")} className={navLink === "Characters" ? "active" : ""} href='/'>Characters</Link>
          </li>
          <li>
            <Link onClick={() => setNavLink("Locations")} className={navLink === "Locations" ? "active" : ""} href='/locations'>Locations</Link>
          </li>
          <li>
            <Link onClick={() => setNavLink("Episodes")} className={navLink === "Episodes" ? "active" : ""} href=''>Episodes</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
