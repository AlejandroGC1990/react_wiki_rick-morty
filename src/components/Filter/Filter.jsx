import React from "react";
// import Gender from "./Category/Gender";
// import Species from "./Category/Species";
// import Status from "./Category/Status";

const Filter = ({
    pageNumber, 
    updatePageNumber, 
    updateStatus, 
    updateGender,
    updateSpecies,
}) => {

    let clear = () => {
        updateGender("");
        updatePageNumber(1);
        updateSpecies("");
        updateStatus("");
        window.location.reload(false);
    }

    return(
        <div className = "col-lg-3 col-12 mb-5">
            <div className = "text-center fw-bold fs-4 mb-2">Filters</div>
            <div 
                style={{cursor: "pointer"}}
                onclick={clear}
                className="text-primary text-decoration-underline text-center mb-3"
            >
                Clear Filters
            </div>        
            <div className="accordion" id="accordionExample">
                {/* <Gender/>
                <Species/>
                <Status/> */}
            </div>
        </div>
    )
}

export default Filter;