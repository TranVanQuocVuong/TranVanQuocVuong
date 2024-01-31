import React, { Component } from 'react'
import Children from './Children'

export default class Parent extends Component {

    getAge = (age)=>{

    }


    render() {
        const { name } = this.props;
        console.log("11111", name);
        return (
            <>
                <div>Parent</div>
                <Children name={name} age={this.getAge}></Children>
            </>
        )
    }
}
