import {useRouteError} from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
        <div className="error-Component">
            <h1>OOPS this Web page is not avaliable</h1>
            <p>{err.status} {err.statusText}</p>
        </div>
    )
}

export default Error;