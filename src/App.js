import './App.css';
import { Carousel } from '3d-react-carousal';
import deposit from "./deposite-funds.png";
import hash from "./hash.png"
import NewSection from './NewSection';
import Collapsible from 'react-collapsible';
import caretDown from './caret-down-solid.svg';

function App() {
  const dataz = [
    {
      img: deposit,
      title: "Lorem Ipsuum",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quam cum voluptas facilis rem fuga!",
      bgcolor: "#EE2737"
    },
    {
      img: hash,
      title: "Deposit",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quam cum voluptas facilis rem fuga!",
      bgcolor: "#00AA13"
    },
    {
      img: deposit,
      title: "Hash",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quam cum voluptas facilis rem fuga!",
      bgcolor: "#F06400"
    },
    {
      img: deposit,
      title: "Hash",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quam cum voluptas facilis rem fuga!",
      bgcolor: "#93328E"
    },
    {
      img: deposit,
      title: "Hash",
      body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, quam cum voluptas facilis rem fuga!",
      bgcolor: "#DF1995"
    }
  ]





  return (
    <>
      <div className="my-8 hidden sm:block">
        <Carousel slides={
          dataz.map((data) => {
            return (
              <div className='rounded-3xl flex py-8 px-8 items-center w-full flex-col-reverse sm:flex-row' style={{
                backgroundColor: `${data.bgcolor}`
              }}>
                <div className='flex-1'>
                  <img src={data.img} alt="" />
                </div>

                <div className='flex-1 px-8 py-8'>
                  <h2 className='text-xl sm:text-3xl font-bold text-white py-4'>{data.title}</h2>
                  <p className='text-white'>{data.body}</p>
                </div>
              </div>
            )
          })
        } arrow={true} arrowBorders={true} />

        <div>
        </div>
      </div>

      <div className="sm:hidden">
        {dataz.map((datMobile) => {

          return (
            <div className=' my-0 mx-auto p-4 my-4 rounded-3xl text-white' style={{
              backgroundColor: `${datMobile.bgcolor}`
            }} >

              <Collapsible trigger={ <p className='flex justify-between items-center font-bold py-2'><span>{datMobile.title}</span> <span><img src={caretDown} alt='expand' width='10px'/></span></p> } transitionTime={50}>
                <div>
                  <p>{datMobile.body}</p>

                </div>

              </Collapsible>
            </div>
          )
        })}
      </div>

      <NewSection />

      <Collapsible trigger="Start here" className='text-4xl'>
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
        </p>
        
        <p>
          It can even be another Collapsible component. Check out the next
          section!
        </p>
      </Collapsible>

    </>
  );
}

export default App;
