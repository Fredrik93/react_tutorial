import React from 'react'

function FormComponent(props) {

    return (
        <main style={{ textAlign: "center", marginTop: "10vh" }} >
            <form >
                <input style={{ margin: "1vh" }}
                    value={props.data.firstName}
                    placeholder="First Name"
                    name="firstName"
                    onChange={props.handleChange}
                /> < br />
                <input style={{ margin: "1vh" }}
                    value={props.data.lastName}
                    placeholder="Last Name"
                    name="lastName"
                    onChange={props.handleChange}
                />< br />
                <input style={{ margin: "1vh", width: "6vh" }}
                    value={props.data.age}
                    placeholder="Age"
                    type="number"
                    name="age"
                    onChange={props.handleChange}
                />< br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male</label>
                < br />

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female</label>

                < br />
                <select value={props.data.destination} name="destination"
                    onChange={props.handleChange} >
                    <option value="" >--- Choose a destination ---</option>
                    <option value="germany" > Germany</option>
                    <option value="norway" > Norway</option>
                    <option value="north pole" > North Pole</option>
                    <option value="South pole" > South Pole</option>

                </select>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isVegan}
                    /> Vegan ?
                    </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isKosher}
                    /> Kosher ?
                    </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestrictions.isLactoseFree}
                    /> Lactose free ?
                    </label>
            </form>


            <h1>Entered Information </h1>
            <div>
                <h3>Your name : {props.data.firstName} {props.data.lastName}</h3>
                <h3>Your age : {props.data.age}</h3>
                <h3>Gender: {props.data.gender}</h3>
                <h3>Your destination: {props.data.destination}</h3>
                <h3> Dietary restrictions:
                        {props.data.dietaryRestrictions.isVegan ? " Vegan " : null}
                    {props.data.dietaryRestrictions.isKosher ? " Kosher " : null}
                    {props.data.dietaryRestrictions.isLactoseFree ? " Lactose Free " : null}
                </h3>
            </div>
            <br /> <button>Submit</button>

        </main>
    )

}
export default FormComponent