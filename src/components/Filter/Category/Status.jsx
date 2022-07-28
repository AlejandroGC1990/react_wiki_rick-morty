import FilterBTN from "../FilterBTN";

const Status = ({updateStatus, updatePageNumber}) => {
    let status = ["Alive", "Dead", "Unknow"];

    return(
        <div className="accordion-item">
            <h2 
                className="accordion-header" 
                id="headingOne"
            >
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapsOne"
                > Status </button>
            </h2>
            <div 
                id="collapseOne"
                className="accordion-collapse collapse-show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {status.map((item, index) => (
                        <FilterBTN
                            index={index}
                            input={item}
                            key={index}
                            name="status"
                            task={updateStatus}
                            updatePageNumber={updatePageNumber}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Status;