import { Dialog } from 'primereact/dialog'
import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';    
import './Modal.css'
export const ModalAdd = ({ product, onChange, visible, setVisible }) => {
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null)

  const footerContent = (
    <div className="p-dialog-footer">
      <Button style={{marginRight: '20px', fontSize: '15pt', marginBottom: '20px'}} label="Close" icon="pi pi-times" onClick={() => setVisible(false)} />
      <Button style={{fontSize: '15pt', marginBottom: '20px', marginRight: '20px',}} label="Save" icon="pi pi-check" onClick={() => setVisible(false)} />
    </div>
  )
  
  return (
    <Dialog className='modal' header="Create helicopter" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
      <div className='modal-content'>
        <div>
          <span>Name</span><br />
          <InputText className='input' value={name} placeholder='Name' onChange={(e) => setName(e.target.value) } />
        </div>
        <div>
          <span>Price</span><br />
          <InputNumber className='inputNumber' value={price} onValueChange={(e) => setPrice(e.value)} mode="currency" currency="KZT" locale="ru-ru" />            
        </div>
        <div>
          <span>Description</span><br />
          <InputTextarea className='input' value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={80} />
        </div>
      </div>
    </Dialog>
  )
}