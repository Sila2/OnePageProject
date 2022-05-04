import React, { Component } from 'react'

//classlarda
//1-costructor
//2-render

//c-ce-c->s  (class var, classı extend etmişim, constructerım var, içerde super keywordü var)

export default class EventBind extends Component {
    constructor(props){
        super(props)
        this.eventBindMethod=this.eventBindMethod.bind(this)
    }

    //event Bind Method
    eventBindMethod(){
        console.log('tıklandı')
        console.log(this)
        console.log("*********************")
        console.log(this.props)
        console.log(this.props.language)
    }

  render() {
      console.log(this.props)
    return (
      <div>
          <button className='btn btn-success shadow mt-5' onClick={this.eventBindMethod}>Click Me</button>
      </div>
    )
  }
}
