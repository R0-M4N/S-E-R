import BmiCalculatorForm from "../../molecules/BmiCalculatorForm/BmiCalculatorForm";
import HeaderLayout from "../header/HeaderLayout";

const BmiLayout = () => {
    return (
        <>
            <HeaderLayout title={"BMI Calculator"}/>
            <BmiCalculatorForm />
        </>
    )
}

export default BmiLayout;