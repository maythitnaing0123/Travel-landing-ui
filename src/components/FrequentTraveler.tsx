import { MouseEvent, useState } from "react"
import Checkmark from "./Icons/Checkmark"
import { useFormValidation } from "../hooks/useFormValidation"
import useInsertData from "../hooks/useInsertProps"


interface FormState {
    currentState: "idle" | "pending" | "success" | "error",
    errorMessage: null | string

}

const buttonStateClasses = {
    idle: "bg-primary-700 opacity-100",
    pending: "bg-primary-700 opacity-50",
    success: "bg-green-600 opacity-100",
    error: "bg-red-400 opacity-100",
}

const FrequentTraveler = () => {

    const [isChecked, setIsChecked] = useState<boolean>(false)

    const [formState, setFormState] = useState<FormState>(
        {
            currentState: "idle",
            errorMessage: null
        }
    )

    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm
    }
        = useFormValidation({
            fullName: "",
            emailAddress: ""
        })

    const mutation = useInsertData({
        onSuccess: handleSuccess,
        onError: handleError
    })




    function handleSumit(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (isChecked && isValid) {

            setFormState({ currentState: "pending", errorMessage: null })

            mutation.mutate({
                createdAt: Date.now(),
                fullName: values.fullName,
                emailAddress: values.emailAddress

            })

            resetForm();

        }

    }

    function handleSuccess() {
        resetForm();
        setIsChecked(false);
        setFormState({ currentState: "success", errorMessage: null })

        setTimeout(() => {
            
            setFormState({ currentState: "idle", errorMessage: null })
 
        } , 2000)
    }

    function handleError(error: Error) {
        setFormState({ currentState: "error", errorMessage: error.message })
    }



    return (
        <section className="bg-color px-24 py-30 ">

            <div className="flex md:py-10  flex-col md:flex-row justify-between border-y-gray-500/40 border-y-1 m-auto max-w-389 items-center gap-x-28">

                {/* one div */}
                <div className="flex flex-col
                basis-100 md:basis-150
                justify-center items-center gap-3 text-center">
                    <h3 className="font-semibold text-2xl">Learn About Our Frequent <br />
                        <p className="mt-4">Traveler Program</p>
                    </h3>
                    <p className="text-[0.9rem] text-base/8 text-gray-500">
                        Interested in saving up to $1000
                        on your next vacation? How about earning travel points
                        that can be converted into rewards like extra nights,
                        free meals, and exclusive offers from resorts around globe?
                    </p>
                </div>



                {/* one div */}
                <div className="bg-gray-500/20 block w-0.5 self-stretch" />


                {/* form -- div */}
                <form className="flex basis-100 md:basis-150 flex-col">
                    <label className="mb-8">
                        <p className="tracking-6 mb-3 text-md">Full Name</p>
                        <input type="text"

                            name="fullName"
                            minLength={2}
                            maxLength={50}
                            value={values.fullName}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-white p-2 
                        placeholder:font-light placeholder:text-sm focus:outline-1 disabled:opacity-50 transition-all duration-200 placeholder:text-gray-400"
                            placeholder="Jane Doe"
                            required />

                        {errors.fullName && <p className="text-red-700 pt-1 pl-0.5 text-sm">{errors.fullName}</p>}

                    </label>
                    <label className="mb-8">
                        <p className="tracking-6 mb-3 text-md">Email</p>
                        <input type="email"
                            disabled={formState.currentState !== "idle"}
                            name="emailAddress"
                            value={values.emailAddress}
                            onChange={handleChange}

                            minLength={2}
                            maxLength={50}
                            className="w-full rounded-lg bg-white p-2 
                        placeholder:font-light placeholder:text-sm focus:outline-1 disabled:opacity-50 transition-all duration-200 placeholder:text-gray-400"
                            placeholder="janedoe@gmail.com"
                            required />

                        {errors.emailAddress && <p className="text-red-700 pt-1 pl-0.5 text-sm">{errors.emailAddress}</p>}

                    </label>

                    <div className="flex  flex-wrap items-center justify-between gap-x-8">
                        <label className="text-gray-500 flex cursor-pointer items-center gap-x-1.5">
                            <button
                                type="button"
                                onClick={() => setIsChecked(!isChecked)}
                                className="flex justify-center size-5 p-1 disabled:opacity-50
                            rounded-xs  bg-white cursor-pointer items-center">
                                <Checkmark className={`size-3 transition-all duration-200 ${isChecked ? "visible opacity-100" : "invisible opacity-0"}`} />
                            </button>
                            <p className="text-sm">Agree to receive promotion email updates</p>

                        </label>
                        <button
                            disabled={formState.currentState !== "idle"}
                            onClick={handleSumit}
                            className={`text-[0.8rem] ${buttonStateClasses[formState.currentState]
                                }
                        cursor-pointer px-5 py-2 mt-5 md:mt-0 font-medium *:text-white transition-all duration-200 disabled:cusrosr-not-allowed rounded-lg text-white`}>
                            {
                                formState.currentState === "idle" ?
                                    "Learn More" :
                                    formState.currentState === "pending" ?
                                        "submitting..." :
                                        formState.currentState === "success"
                                            ? "Success" : "Submission Failed"
                            }
                        </button>
                    </div>

                </form>
</div>

        


        </section>
    )
}

export default FrequentTraveler
