import React, { useState } from 'react'

const calculateExponent = (base, exponent) => base ** exponent

const useExponentCalculator = () => {
    const [base, setBase] = useState(4)
    const [exponent, setExponent] = useState(4)
    const result = calculateExponent(base, exponent).toFixed(2)

    const handleBaseChange = (e) => {
        e.preventDefault()
        setBase(e.target.value)
    }

    const handleExponentChange = (e) => {
        e.preventDefault()
        setExponent(e.target.value)
    }

    return {
        base,
        exponent,
        result,
        handleBaseChange,
        handleExponentChange,
    }
}
export default useExponentCalculator