import { useState } from "react"
import ButtonAtom from "../../atoms/ButtonAtom";
import "./bmiCalculator.css"

const BmiCalculatorForm = () => {

    const [bmi, setBmi] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        var {weight, height} = document.forms[0];
        var weightFloat = parseFloat(weight.value);
        console.log(weightFloat);
        const bodyMassIndex = (weight.value / height.value / height.value) * 10000;
        setBmi(bodyMassIndex);
    }

    return (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Weight in KG</label>
              <input type="number" name="weight" required step={"any"} min={0.1}/>
            </div>
            <div className="input-container">
              <label>Height in CM</label>
              <input type="number" name="height" required step={"any"} min={0.1}/>
            </div>
            <div className="result-container">
                <label>Body Mass Index</label>
                <p>{bmi}</p>
            </div>
            <div className="button-container">
                <ButtonAtom buttonType="submit"/>
            </div>
          </form>
        </div>
      );
}

export default BmiCalculatorForm;