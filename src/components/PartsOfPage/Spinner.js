import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "../../styling/PartsOfPage/Spinner.css"

export const Spinner = (props) => {
    const { promiseInProgress } = usePromiseTracker({area: props.area, delay: 0});

    return (
        promiseInProgress && (
            <div className="spinner">
                <Loader type="ThreeDots" color="#3A466A" height="100" width="100" />
            </div>
        )
    );
};

export default Spinner;