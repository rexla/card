import React, { useState } from 'react'
import useExponentCalculator from "./useExponentCalculator"

const ExponentCalculator = () => {
    const {
        base,
        exponent,
        result,
        handleBaseChange,
        handleExponentChange,
    } = useExponentCalculator()
    
  return (
    <div>
        <input
        type="number"
        className="base"
        onChange={handleBaseChange}
        placeholder="Base"
        value={base}
        />
        <input
        type="number"
        className="exponent"
        onChange={handleExponentChange}
        placeholder="Exp."
        value={exponent}
        />
        <h1 className="result">{result}</h1>
    </div>
  )
}

export default ExponentCalculator