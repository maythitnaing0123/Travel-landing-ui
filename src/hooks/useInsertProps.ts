import { useMutation } from "@tanstack/react-query";
import { Lead } from "../assets/utils/contentType";
import { insertPost } from "../api/api";

interface useInsertProps {
    onSuccess : () => void,
    onError: (error : Error) => void;
}

export default function useInsertData(props : useInsertProps){
   
    
    const mutation = useMutation({
        mutationFn: async(lead : Lead) => {
            insertPost(lead)

        },
        onSuccess: props.onSuccess,
        onError: props.onError
    });

    return mutation;
}