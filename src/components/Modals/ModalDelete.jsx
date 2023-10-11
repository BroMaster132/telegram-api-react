import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { MultiSelect } from 'primereact/multiselect';
import { React, useState } from 'react';
export const ModalDelete = ({ product, onDelete, visible, setVisible }) => {
  const [selectedHelicopters, setSelectedHelicopters] = useState(null);

  const deleteHelicopter = () => {
      onDelete(selectedHelicopters);
      setVisible(false);
  }

  const footerContent = (
    <div className="p-d-flex p-ai-center p-jc-center">
      <Button label="Delete" icon="pi pi-trash" onClick={deleteHelicopter} />
    </div>
  )
  
  const helicopters = [
    { id: 1, name: 'Helicopter 1' },
    { id: 2, name: 'Helicopter 2' },
    { id: 3, name: 'Helicopter 3' },
    { id: 4, name: 'Helicopter 4' },
    { id: 5, name: 'Helicopter 5' },
    { id: 6, name: 'Helicopter 6' },
    { id: 7, name: 'Helicopter 7' },
    { id: 8, name: 'Helicopter 8' },
    { id: 9, name: 'Helicopter 9' },
    { id: 10, name: 'Helicopter 10' },
    { id: 11, name: 'Helicopter 11' },
  ]

  return (
    <Dialog className='modal' header="Delete Helicopter" visible={visible} footer={footerContent} onHide={() => setVisible(false)}>
      <div className="p-d-flex p-ai-center p-jc-center">
        <h8>Are you sure you want to delete this helicopter?</h8>
      </div>
      <div className="p-d-flex p-ai-center p-jc-center">
        <MultiSelect value={selectedHelicopters} options={helicopters} onChange={(e) => setSelectedHelicopters(e.value)} optionLabel="name" />
      </div>
    </Dialog>
  )


}