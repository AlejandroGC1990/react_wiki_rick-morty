import FilterBTN from "../FilterBTN";

const Species = ({updateSpecies, updatePageNumber}) => {
    let species = 
    ["Human", "Allien", "Humanoid", 
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease", "Robot", "Cronenberg", "Planet"];
    
    return(
        <div className="accordion-item">
            <h2 
                className="accordion-header"
                id="headingTwo"
            >
                <button 
                    className="accordion-button collapsed"
                    type="headingTwo"
                > Species </button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="@accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {species.map((item, index) => {
                        return(
                            <FilterBTN
                                name="species"
                                index={index}
                                key={index}
                                updatePageNumber={updatePageNumber}
                                task={updateSpecies}
                                input={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Species;