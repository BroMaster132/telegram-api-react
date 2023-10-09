import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { Form } from './components/Form/Form';
// import { useTelegram } from './hooks/useTelegram';
import { SpeedDialButton } from './components/SpeedDialButton/SpeedDialButton';
import { Practice } from './components/Practice/Practice';
import { First} from './components/First/First';
import { Second } from './components/Second/Second';
import { Third } from './components/Third/Third';
const products = [
  {id: '1', title: "Helicopter#1", price: 350000000, description: "Летает, не бит не крашен", image: "/src/assets/helicopter.webp"},
  {id: '2', title: "Helicopter#2", price: 450000000, description: "Летала девушка, один хозяин", image: "/src/assets/helicopter.webp"},
  {id: '3', title: "Helicopter#3", price: 550000000, description: "Летал только в выходные", image: "/src/assets/helicopter.webp"},
  {id: '4', title: "Helicopter#4", price: 650000000, description: "Заливали только ракетное топливо", image: "/src/assets/helicopter.webp"},
  {id: '5', title: "Helicopter#5", price: 750000000, description: "Обмен на квартиру", image: "/src/assets/helicopter.webp"},
  {id: '6', title: "Helicopter#6", price: 850000000, description: "Продам гараж, в подарок вертолет, торг, обмен, рассрочка, кредит, лизинг", image: "https://media-s3-us-east-1.ceros.com/lockheed-martin/images/2023/04/25/ba239da186ff41588c93c25d7e9ff524/6.png?imageOpt=1&fit=bounds&width=1003"},
  {id: '7', title: "Helicopter#7", price: 950000000, description: "Обмен на квартиру", image: "/src/assets/helicopter.webp"},


]

function App() {

  // const { tg } = useTelegram()

  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header>Заголовок</Header>
      <Routes>
        <Route index element={<ProductList products={products} />}></Route>
        <Route path={'form'} element={<Form />}></Route>
        <Route path={'/first'} element={<First/>}></Route>
        <Route path={'/second/fuckingReact'} element={<Second/>}></Route>
        <Route path={"/third"} element={<Third/>}></Route>
      </Routes>
      <SpeedDialButton products={products} />
      <Practice />
      
    </div>
  );
}

export default App;
