import React, { Component } from 'react'

export default class MainBodyClass extends Component {
  //main="Main bilgisi" computerName="com52Xy" computerTrade="Marka" computerPrice="12"
  render() {
    console.log(this.props)
    const{main,computerName,computerTrade,computerPrice}=this.props;
    return (
      <div>
        <h1 className='text-warning'>Main</h1>
        <p>{this.props.main}</p>
        <ul>
          <li>{main}</li>
          <li>{computerName}</li>
          <li>{computerTrade}</li>
          <li>{computerPrice}</li>
        </ul>
      </div>
    )
  }
}
