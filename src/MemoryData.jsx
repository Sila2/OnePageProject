import React, { Component } from 'react'

//Class Adı: MemoryData
//constructor,
//Button Props gelen dataları göstersin ==> PropsDataShow()
//dataBind: "", dataChange="", dataInMemory=""

//Anahtar kelimeler: event, constructor, super, bind, props
//console.log(React.Component)


export default class MemoryData extends Component {
    constructor(props){
        super(props)
        this.PropsDataShow=this.PropsDataShow.bind(this)
    }

    PropsDataShow(){
        console.log(this.props)
    }

  render() {
    return (
      <div>
          <button className='btn btn-primary shadow mt-5' onClick={this.PropsDataShow}>Click Me</button>
      </div>
    )
  }
}
