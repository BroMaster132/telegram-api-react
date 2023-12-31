import React from 'react'
import { Button } from '../Button/Button'
import "./ProductCard.css"
import { Fieldset } from 'primereact/fieldset';
export const ProductCard = ({product, className, onAdd}) => {

  const onAddHandler = () => {
    onAdd(product)
  }

return (
  <Fieldset className='card' legend="Header" toggleable >
    <div className={'product ' + className}>
    {/* <img src="https://media-s3-us-east-1.ceros.com/lockheed-martin/images/2023/04/25/ba239da186ff41588c93c25d7e9ff524/6.png?imageOpt=1&fit=bounds&width=1003"  /> */}
    <div className={'title'}>{product.title}</div>
    <div className={'description'}>{product.description}</div>
    <div className={'price'}>
      <span>Цена: <b>{product.price}</b></span>
    </div>
    <Button className={'add-btn'} onClick={onAddHandler}>
      Добавить в корзину
    </Button>
    </div>
</Fieldset>
    
)}


