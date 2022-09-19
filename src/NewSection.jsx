import classes from './NewSectio.module.css';
import Bg from "./scale-bg.svg"
const NewSection = () => {
    return (
        <div className={classes.mainCon} style={{
            backgroundImage: `url(${Bg})`,
        }}>
            <div className={ `${classes.InnerDiv}` }>
                <h1 className='py-5 text-2xl w-2/3 font-bold'>
                    Once a call-centre operation in Jakarta, now a Decacorn in Southeast Asia.
                </h1>

                <ul className='list-disc'>
                    <li className='py-2 font-semibold w-2/3'>We have 900,000 food merchants</li>
                    <li className='py-2 font-semibold w-2/3'>As of 2020, the Gojek app has been downloaded almost 190 million times</li>
                    <li className='py-2 font-semibold w-2/3'>1100% growth in transactions from 2016 to 2019</li>
                    <li className='py-2 font-semibold w-2/3'>In 2019, we contributed $7 billion+ to the Indonesian economy</li>
                </ul>
            </div>

        </div>
    );
}

export default NewSection;