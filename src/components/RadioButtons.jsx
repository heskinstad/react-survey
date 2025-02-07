/* eslint-disable react/prop-types */
function RadioButtons({formData, handleChange}) {
    return (
        <>
            <ul>
                <li>
                    <input
                    id="color-one"
                    type="radio"
                    name="color"
                    value="1"
                    onChange={handleChange}
                    checked={formData.color === "1"}
                    /><label
                    htmlFor="color-one"
                    >1</label
                    >
                </li>
                <li>
                    <input id="color-two"
                    type="radio"
                    name="color"
                    value="2"
                    onChange={handleChange}
                    checked={formData.color === "2"}
                    /><label
                    htmlFor="color-two"
                    >2</label
                    >
                </li>
                <li>
                    <input
                    id="color-three"
                    type="radio"
                    name="color"
                    value="3"
                    onChange={handleChange}
                    checked={formData.color === "3"}
                    /><label
                    htmlFor="color-three"
                    >3</label
                    >
                </li>
                <li>
                    <input
                    id="color-four"
                    type="radio"
                    name="color"
                    value="4"
                    onChange={handleChange}
                    checked={formData.color === "4"}
                    /><label
                    htmlFor="color-four"
                    >4</label
                    >
                </li>
            </ul>
        </>
    );
}

export default RadioButtons;