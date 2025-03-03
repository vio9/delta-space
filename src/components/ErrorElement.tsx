import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
    const error = useRouteError()
    console.error(error);

    return(
        <div className="section">
            <h4>An error has occurred.</h4>
        </div>
    )
}

export default ErrorElement