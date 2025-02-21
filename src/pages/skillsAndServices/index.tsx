import React, { useState } from 'react'
import ListDetail from '../list-detail.template'
import Hero from './Hero'
import SimpleModals from '../../components/SimpleModals'
import CertificateList from './Certificate'

function SkillAndServices() {
  const [isOpen, setOpen] = useState(false);
  const openModal =()=> {setOpen(true)}
  const closeModal =()=> setOpen(false)

  const [modalChildren, setModalChildren] = useState<React.ReactNode>(<></>)

  console.log(modalChildren)
  return (
    <ListDetail>
        <SimpleModals isOpen={isOpen} onClose={closeModal}>{modalChildren}</SimpleModals>
        <Hero modalHandler={[openModal, setModalChildren]}/>
        <CertificateList modalHandler={[openModal, setModalChildren]}/>
    </ListDetail>
  )
}

export default SkillAndServices