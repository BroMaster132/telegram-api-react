import './SpeedDialButton.css'
import React, { useState} from 'react'
import { SpeedDial } from 'primereact/speeddial';


        

export const SpeedDialButton = ({products}) => {
  const [visible, setVisible] = useState(false);

  const actionItems = [
    { icon: 'pi pi-shopping-cart', command: () => { updateHelicopter() } },
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

  return (
    <div>
        <SpeedDial model={actionItems}  visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className={'speedButton'} />


    </div>
  )
}

// direction='down' style={{ left: 'calc(50% - 2rem)', top: 0 }}