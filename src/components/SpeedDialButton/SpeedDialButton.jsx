import './SpeedDialButton.css'
import React, { useState} from 'react'
import { SpeedDial } from 'primereact/speeddial';

import { ModalDelete } from '../Modals/ModalDelete';
import { ModalAdd } from '../Modals/ModalAdd';
import { ModalEdit } from '../Modals/ModalEdit';

export const SpeedDialButton = ({products}) => {
  const [visible, setVisible, ] = useState(false);

  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);

  const actionItems = [
    { icon: 'pi pi-pencil', command: () => { setVisibleEdit(true) } },
    { icon: 'pi pi-cart-plus', command: () => { setVisibleAdd(true) } },
    { icon: 'pi pi-trash', command: () => { setVisibleDelete(true) } }
  ];


  
  console.log(products);
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

  
  function deleteHelicopter(params) {
    
  }
  return (
    <div>
        <SpeedDial model={actionItems}  visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className={'speedButton'} />

        <ModalDelete visible={visibleDelete} setVisible={setVisibleDelete} product={products} onChange={deleteHelicopter} />
        <ModalAdd visible={visibleAdd} setVisible={setVisibleAdd} product={products}  />
        <ModalEdit visible={visibleEdit} setVisible={setVisibleEdit} product={products} onChange={updateHelicopter} />
    </div>
  )
}

