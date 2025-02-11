import React from 'react'
import BaseTemplate from './base.template'

function ListDetail({children}:{children:React.ReactNode}) {
  return (
    <BaseTemplate>
        {children}
    </BaseTemplate>
  )
}

export default ListDetail