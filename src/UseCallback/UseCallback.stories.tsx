import React, {useCallback} from "react";
import {useMemo, useState} from "react";

export default {
    title: 'UseCallback',
}

export const LikeUseCallback = () => {
    console.log(' LikeUseCallback ')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'TS'])
    const newArray = useMemo(() => {
        const newArray = books.filter(b => b.toLowerCase().indexOf('s') > -1)
        return newArray
    }, [books])

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

const BooksSecret = (props: { addBook: () => void }) => {
    //debugger
    console.log(' BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)