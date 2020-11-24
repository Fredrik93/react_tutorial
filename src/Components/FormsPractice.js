import React from 'react'
import FormComponent from './FormComponent'
class FormsPractice extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: "",
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox"
            ?
            this.setState(prevState => {
                return {
                    dietaryRestrictions: {
                        ...prevState.dietaryRestrictions,
                        [name]: checked
                    }
                }

            })
            :
            this.setState({ [name]: value })
    }

    render() {
        return <FormComponent
            handleChange={this.handleChange}
            //these are doing the same thing but the ... operator is really good. you can also then just say 'props.firstName' instead of props.data.firstName ( in FormComponent)
            data={this.state}
            {...this.state}
        />
    }
} export default FormsPractice