import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import ImgStar from "./components/Rating/ImgStar";

function App() {
    console.log("App rendering")
    return (
        <div>
            <ImgStar/>
            <PageTitle title={"This is APP component"}/>
            Article 1
            <Rating value={5}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>
            Article 2
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

function PageTitle(props : PageTitlePropsType) {
    console.log("AppTitle rendering")
    return <h1> {props.title}</h1>
}

export default App;
