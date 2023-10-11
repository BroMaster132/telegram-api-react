import { Dialog } from 'primereact/dialog'
import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';    
import { MultiSelect } from 'primereact/multiselect';
import './Modal.css'

export const ModalEdit = ({ product, onDelete, visible, setVisible }) => {
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null)
  const [id, setId] = useState(null)
  const [selectedHelicopters, setSelectedHelicopters] = useState(null);
  


  const editHelicopter = () => {
    for (let i = 0; i < product.length; i++) {
      console.log(product[i].id);
      if(selectedHelicopters[i].code == product[i].id){
          console.log(1);
          product[i].title = name
          product[i].price = price
          product[i].description = description
        }
      setVisible(false)
      }
    }
  
  const footerContent = (
    <div className="p-dialog-footer">
      <Button style={{marginRight: '20px', fontSize: '15pt', marginBottom: '20px'}} label="Close" icon="pi pi-times" onClick={() => setVisible(false)} />
      <Button style={{fontSize: '15pt', marginBottom: '20px', marginRight: '20px',}} label="Edit" icon="pi pi-check" onClick={() => editHelicopter()} />
    </div>
  )

  const helicopter = product.map((item) => {
    return {
      name: item.title,
      code: item.id
    }
  })

  return (
    <Dialog className='modal' header="Edit helicopter" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
      <div className="p-d-flex p-ai-center p-jc-center">
        <span>Choose helicopter</span><br />
        <MultiSelect value={selectedHelicopters} options={helicopter} onChange={(e) => setSelectedHelicopters(e.value)} optionLabel="name" />
      </div>
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