'use client'
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { useEffect, useState } from "react";
import Logo from '../foto/Logo.svg';
import '../scss/navBar.scss';
import { rotateOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { NavigatePanelClass } from "@/helpers/isOnLocationsPage";
import { usePathname } from "next/navigation";

const Flashe = styled.div`animation: 10s ${keyframes`${rotateOut}`} infinite`;

export default function NavBar() {

  const router = usePathname();
  
  const [navLink, setNavLink] = useState<string>("Characters")

  useEffect(() => {
    setNavLink(NavigatePanelClass(router))
  }, [router]);

  return (
    <div className="navbar">
      <div>
        <Flashe><Image src={Logo} width={46} height={49} alt='Logo Rick and Morti' /></Flashe>
      </div>
      <div>
        <ul>
          <li>
            <Link className={navLink === "Characters" ? "active" : ""} href='/'>Characters</Link>
          </li>
          <li>
            <Link className={navLink === "Locations" ? "active" : ""} href='/locations'>Locations</Link>
          </li>
          <li>
            <Link className={navLink === "Episodes" ? "active" : ""} href='/episodes'>Episodes</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
