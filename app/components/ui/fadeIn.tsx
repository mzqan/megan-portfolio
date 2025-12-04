"use client"

import React, { useState, useEffect } from 'react'

const FadeInWrapper = (props: { children: React.ReactNode}) => {
    const { children } = props;
    const [isVisible, setIsVisible] = useState<boolean>(false)

    useEffect(() => {
    const timer = setTimeout(() => {
        setIsVisible(true)
    }, 50)

    return () => clearTimeout(timer)
    }, [])

    return (
    <div className={`w-full min-h-screen transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {children}
    </div>
    )
}

export default FadeInWrapper
