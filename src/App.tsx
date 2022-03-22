import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, { RatingValueType} from "./components/Rating/Rating";
import ImgStar from "./components/Rating/ImgStar";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";
import { UnControlledOnOff } from './components/OnOff/UnControlledOnOff';


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={(setSwitchOn)}/>

            UnControlledOnOff
            <UnControlledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <ImgStar/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating/>  {/*нету props, так данные в локальном стейте  компонента UnControlledRating*/}

            <UnControlledAccordion titleValue={'Uncontroled Menu'}/>
            <Accordion titleValue={"Menu"}
                      collapsed={accordionCollapsed}
                      onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1> {props.title}</h1>
}


export default App;
