import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { MultiSelect } from 'primereact/multiselect';
import { React, useState } from 'react';

export const ModalDelete = ({ product, onChange, visible, setVisible }) => {
  const [selectedHelicopters, setSelectedHelicopters] = useState(null);

  function deleteHelicopter(params) {
    for (let i = 0; i < selectedHelicopters.length; i++) {
      console.log(i);
      if(selectedHelicopters[i].code == product[i].id){
          console.log(product[i]);
          product.splice(i, 1);
      }
    }
    onChange(product)
    setVisible(false)
  }

  const footerContent = (
    <div className="p-d-flex p-ai-center p-jc-center">
      <Button label="Delete" icon="pi pi-trash" onClick={deleteHelicopter} />
    </div>
  )
  
  const helicopter = product.map((item) => {
    return {
      name: item.title,
      code: item.id
    }
  })
  
  
  return (
    <Dialog className='modal' header="Delete Helicopter" visible={visible} footer={footerContent} onHide={() => setVisible(false)}>
      <div className="p-d-flex p-ai-center p-jc-center">
        <h8>Are you sure you want to delete this helicopter?</h8>
      </div>
      <div className="p-d-flex p-ai-center p-jc-center">
        <MultiSelect value={selectedHelicopters} options={helicopter} onChange={(e) => setSelectedHelicopters(e.value)} optionLabel="name" />
      </div>
    </Dialog>
  )
  
  }

