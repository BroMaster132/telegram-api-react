import './SpeedDialButton.css'
import React, { useState} from 'react'
import { SpeedDial } from 'primereact/speeddial';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputNumber } from 'primereact/inputnumber';    
import { FileUpload } from 'primereact/fileupload';
        
export const SpeedDialButton = ({products}) => {
  const [visible, setVisible, ] = useState(false);
  const [display, setDisplay] = useState(false)
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [price, setPrice] = useState(null)


  const actionItems = [
    { icon: 'pi pi-shopping-cart', command: () => { setDisplay(true) } },
    { icon: 'pi pi-cart-plus', command: () => { addHelicopter() } },
    { icon: 'pi pi-trash', command: () => { removeHelicopter() } }
  ];


  const addHelicopter = (data) => {
    products.push(data)
  }

  const removeHelicopter = (id) => {
    products = products.filter(item => item.id !== id)
  }

  const updateHelicopter = (id, data) => {
    products = products.map(item => {
      if (item.id === id) {
        return data
      }
      return item
    })
  }
  const onUpload = (e) => {
    const files = e.target.files;
    const reader = new FileReader();
    reader.readAsText(files[0]);
    console.log(files);
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result)
      
      updateHelicopter(data.id, data)
    }
  }
  const footerContent = (
    <div className="p-dialog-footer">
      <Button style={{marginRight: '20px', fontSize: '15pt', marginBottom: '20px'}} label="Close" icon="pi pi-times" onClick={() => setDisplay(false)} />
      <Button style={{fontSize: '15pt', marginBottom: '20px', marginRight: '20px',}} label="Save" icon="pi pi-check" onClick={() => setDisplay(false)} />
    </div>
  )

  return (
    <div>
        <SpeedDial model={actionItems}  visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className={'speedButton'} />
        <Dialog className='modal' header="Create helicopter" visible={display} style={{ width: '50vw' }} onHide={() => setDisplay(false)} footer={footerContent}>
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
            <div>
              <span>Image</span><br />
              <FileUpload mode="basic" name="demo[]" url="/" accept="image/*" chooseLabel='Upload' maxFileSize={1000000} onUpload={onUpload} />
            </div>


          </div>
        </Dialog>

    </div>
  )
}

