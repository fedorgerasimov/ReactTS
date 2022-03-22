import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, { RatingValueType} from "./components/Rating/Rating";
import ImgStar from "./components/Rating/ImgStar";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";

function App() {

    let[ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={'App'}>
            <OnOff/>
            <ImgStar/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UnControlledAccordion titleValue={'UncontroledMenu'}/>
            <UnControlledAccordion titleValue={'UncontroledUsers'}/>
            {/*      <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>*/}
            Article UnControlled
            <UnControlledRating/>  {/*нету props, так данные в локальном стейте  компонента UnControlledRating*/}
            Article 3
        {/*    <Rating value={0}/>
          */}
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
