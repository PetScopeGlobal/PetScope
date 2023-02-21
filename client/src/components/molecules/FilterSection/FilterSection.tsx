interface FilterSectionPropType {
    mappingArray: { displayText: string; valueText: string }[];
    elementName: string;
    setFilterValue: React.Dispatch<React.SetStateAction<undefined | string>>;
}

export default function FilterSection(props: FilterSectionPropType) {
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        props.setFilterValue(e.target.value);
    }
    return (
        <section className="filter-section-container">
            <h2>Filter By</h2>
            <select
                name={props.elementName}
                id={props.elementName}
                onChange={handleChange}
                defaultValue={props.mappingArray[0].valueText}
            >
                {props.mappingArray.map((item, index) => {
                    return (
                        <option key={index} value={item.valueText}>
                            {item.displayText}
                        </option>
                    );
                })}
            </select>
        </section>
    );
}
