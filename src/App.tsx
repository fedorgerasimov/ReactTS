import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import ImgStar from "./components/Rating/ImgStar";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./components/UnControlledRating/UnControlledRating";

function App() {
    console.log("App rendering")
    return (
        <div className={'App'}>
            <OnOff/>
            <ImgStar/>
            <PageTitle title={"This is APP component"}/>
            Article 1
            <Rating value={5}/>
            <UnControlledAccordion titleValue={'UncontroledMenu'}/>
            <UnControlledAccordion titleValue={'UncontroledUsers'}/>
            {/*      <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>*/}
            Article UnControlled
            <UnControlledRating/>  {/*нету props, так данные в локальном стейте  компонента UnControlledRating*/}
            Article 3
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
