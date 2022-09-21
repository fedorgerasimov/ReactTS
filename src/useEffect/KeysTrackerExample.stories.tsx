import React, {Component, useEffect, useState} from 'react';

export default {
    title: 'useEffectKeysTrackerExample',
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState<string>("");
    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText((state) => state + e.key)
            // setText(text+ e.key) возможна такая запись, так как есть removeEventListener
        }
        console.log('Effect occurred' + text)
        window.addEventListener('keypress', handler)
        return () => {
            console.log("clean up")
            window.removeEventListener('keypress', handler)
        }
    }, [])   // setText(text+ e.key) возможна такая запись, так как есть removeEventListener
                    // тогда нужна зависимость [text]

    return (<>
            Typed text : {text}
        </>
    )
}