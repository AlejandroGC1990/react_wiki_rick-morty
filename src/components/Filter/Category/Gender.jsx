import FilterBTN from "../FilterBTN";

const Gender = ({updateGender, updatePageNumber}) => {
    let genders = ["female", "male", "genderless", "unknow"];

    return(
        <div className="accordion-item">
            <h2 
                className="accordion-header" 
                id="headingThree">
                <button
                    className="accordion-button collapsed" 
                    type="button"
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree"
                    aria-expanded="false" 
                    aria-controls="collapseThree"
                > Gender </button>
            </h2>
            <div 
                id="collapseThree" 
                className="accordion-collapse collapse"
                aria-labelledby="headingThree" 
                data-bs-parent="#accordionExample"
            >
            <div className="accordion-body d-flex flex-wrap gap-3">
                {genders.map((items, index) => {
                    return (
                        <FilterBTN
                            index={index} 
                            input={items}
                            key={index}
                            name="gender" 
                            task={updateGender} 
                            updatePageNumber={updatePageNumber}
                        />
                    );
                })}
                </div>
            </div>
        </div>
    );
};

export default Gender;