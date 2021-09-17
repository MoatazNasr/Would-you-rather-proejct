import React from 'react'
import { useLocation } from 'react-router'

export default function NotMatched() {

    const {pathname} = useLocation()

    return (
        <div id='oopss'>
            <div id='error-text'>
                <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
                <span>404 PAGE</span>
                <p id="p-a">
               
                The {pathname} you were looking for could not be found</p>
              
            </div>
        </div>
    )
}

