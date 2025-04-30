import {useState , ChangeEvent} from "react";

interface FormValues{
    [key : string] : string
}

interface FormError {
    [key : string] : string
}

export function useFormValidation(inputs: FormValues){

  const [values , setValues] = useState<FormValues>(inputs);
  const [errors , setErrors] = useState<FormError>({})
  const [isValid , setIsValid] = useState<boolean>(false)


    function handleChange(e: ChangeEvent<HTMLInputElement>){

        const {name , value} = e.target;

        setValues((prev) => {
            return {
                ...prev ,
                [name] : value
            }
        });

        setErrors((prev) => {
            return {
                ...prev ,
                [name] : e.target.validationMessage
            }
        })

        setIsValid(e.target.closest("form")?.checkValidity() ?? false)

    }

    function resetForm(
        values: FormValues = inputs,
        errors: FormError = {},
        isValid : boolean = false
    ){

        setValues(values);
        setErrors(errors);
        setIsValid(isValid)
      
    }

    return {
        values,
        errors,
        isValid,
        handleChange,
        resetForm



    }

}