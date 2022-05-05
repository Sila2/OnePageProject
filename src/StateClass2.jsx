import React, { Component } from 'react'

//props -> bir datadan başka bir dataya veri gönderirken kullanıyoruz.
//state -> onun o andaki durumu 

//state yapısı: o anda o datanın yani komponentin içinde kullanılan datanın, javascript objesinin ne durumda olduğunu söyler

//this {}
export default class StateClass2 extends Component {
    //constructor
    constructor(props){
        super(props);

        //bind
        this.informationMethod=this.informationMethod.bind(this)

        //state
        this.state={
            adi:"default adınızı girin",
            soyadi:"default soyadınızı girin",
        }
    }

    //method
informationMethod(){
    console.log('Eklendi')
    console.log(this)
    console.log(this.state.adi)
    console.log(this.state.soyadi)
    console.log("************************")

    //state
    // this.state.adi="sila";
    // console.log(this.state.adi)
    // this.state.soyadi="ikinci";
    // console.log(this.state.soyadi)

    //setState
    this.setState({
        adi:"sila",
        soyadi:"ikinci",
    })
    console.log(this.state.adi)
    console.log(this.state.soyadi)
}

//eslint: gramer hataları için yönlendirsin.

  render() {
    return (
      <div>
          {/* state kısmındaki bileşene erişmek istiyorum. */}
          <p>{this.state.adi} - {this.state.soyadi}</p> 
          <button className='btn btn-warning' onClick={this.informationMethod}>Gönder</button>
      </div>
    )
  }
}
