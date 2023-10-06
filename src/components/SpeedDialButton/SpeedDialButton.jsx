import './SpeedDialButton.css'
import React, { useState, useCallback, useEffect } from 'react'
import { SpeedDial } from 'primereact/speeddial';


        

export const SpeedDialButton = () => {
  const [visible, setVisible] = useState(false);

  const actionItems = [
    { icon: 'pi pi-shopping-cart', command: () => { } },
    { icon: 'pi pi-cart-plus', command: () => { } },
    { icon: 'pi pi-trash', command: () => { } }
  ];

  return (
    <div>
        <SpeedDial model={actionItems} direction='down' style={{ left: 'calc(50% - 2rem)', top: 0 }} visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} />


    </div>
  )
}