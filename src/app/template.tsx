"use client"

import { JoinWaitlistModal } from '@/components/JoinWaitlistModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

type Props = {
    children?: React.ReactNode;
}

const Teamplte = ({children}:Props) => {
  useEffect(() => {
     AOS.init();
   }, [])

  return (
    <>
     {children}
     <JoinWaitlistModal />
    </>
  )
}

export default Teamplte