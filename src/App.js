import './App.css';
import { Carousel } from '3d-react-carousal';
import deposit from "./deposite-funds.png";
import hash from "./hash.png"

function App() {
  const dataz = [
    {
      img: deposit,
      title: "Lorem Ipsuum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quam cum voluptas facilis rem fuga!",
      bgcolor: "red"
    },
    {
      img: hash,
      title: "Deposit",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quam cum voluptas facilis rem fuga!",
      bgcolor: "green"
    },
    {
      img: deposit,
      title: "Hash",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quam cum voluptas facilis rem fuga!",
      bgcolor: "blue"
    }
  ]


  


  return (
    <div className=" my-8">
      <Carousel slides={
        dataz.map((data) => {
          return (
            <div className='rounded-lg flex py-8 items-center w-full flex-col-reverse sm:flex-row' style={{
              backgroundColor: `${data.bgcolor}`
            }}>
              <div className='flex-1'>
                <img src={data.img} alt=""/>
              </div>

              <div className='flex-1 px-8 py-8'>
                <h2 className='text-xl sm:text-3xl font-bold text-white py-4'>{ data.title }</h2>
                <p className='text-white'>{ data.body }</p>
              </div>
            </div>
          )
        })
      } arrow ={true} arrowBorders={true}/>

      <div>

      </div>
    </div>
  );
}

export default App;
