import ReactGA from "react-ga4";


export function initGoogleAnalytics(){
    ReactGA.initialize(import.meta.env.VITE_MESSUREMENT);
}

export function logView(){
    ReactGA.event("page_view" , {
        page_location: window.location.href,
        page_title: document.title,
        page_path: window.location.pathname + window.location.search


    })
}

interface customEvent{
    eventName: string,
    category: string,
    action: string,
    customProps? : Record<string , string>
}

export function logCustomEvent(props: customEvent){
    ReactGA.event(props.eventName , {
        category : props.category,
        action: props.action,
        ...props?.customProps
    })
}
