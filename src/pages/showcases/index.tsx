import React, { useState } from 'react'
import ListDetail from '../list-detail.template'
import Hero from './Hero'
import ProjectList from './ProjectList'
import SimpleModals from '../../components/SimpleModals'

function ShowCases() {
  const [isOpen, setOpen] = useState(false);
  const openModal =()=> {setOpen(true)}
  const closeModal =()=> setOpen(false)

  const [modalChildren, setModalChildren] = useState<React.ReactNode>(<></>)

  console.log(modalChildren)
  return (
    <ListDetail>
        <SimpleModals isOpen={isOpen} onClose={closeModal}>{modalChildren}</SimpleModals>
        <Hero/>
        <ProjectList modalControl={[openModal, closeModal, setModalChildren]}/>
    </ListDetail>
  )
}

export default ShowCases