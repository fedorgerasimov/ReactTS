import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions'
import Rating, {RatingValueType} from './Rating'

export default  {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyStars = () => <Rating onClick={()=> {}} value={0}/>
export const Rating1 = () => <Rating onClick={()=> {}} value={1}/>
export const Rating2 = () => <Rating onClick={()=> {}} value={2}/>
export const Rating3 = () => <Rating onClick={()=> {}} value={3}/>
export const Rating4 = () => <Rating onClick={()=> {}} value={4}/>
export const Rating5 = () => <Rating onClick={()=> {}} value={5}/>
export const RatingChanging = () => {
    const [rating, setRating] =useState<RatingValueType>(5);
    return<Rating value={rating} onClick={setRating} />
}

