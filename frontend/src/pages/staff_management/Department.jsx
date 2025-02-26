import React from 'react'
import TwoFieldForm from '../../components/ui/form/TwoFieldForm'
const Department = () => {
  return (
    <>
   <TwoFieldForm
    title='Department Table'
    roleColumnName='Department'
    inputProps={{
        label:'+Add Dept',
        placeholder:'Enter Dept'
    }}
   />
    </>
  )
}

export default Department