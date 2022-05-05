import React, { Component } from 'react'

//classlarda
//1-costructor
//2-render

//Class Adı: MemoryData
//constructor,
//Button Props gelen dataları göstersin ==> PropsDataShow()
//dataBind: "", dataChange="", dataInMemory=""

//Anahtar kelimeler: event, constructor, super, bind, props
//console.log(React.Component)

//c-ce-c->s  (class var, classı extend etmişim, constructerım var, içerde super keywordü var)

export default class EventBind extends Component {
    constructor(props){
        super(props) //üstteki verileri almak için
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


    //constructor yapısını çağırmadan render ı çağırırsak undefined(tanımlanmamış) olur.
    //çünkü render da çağrılan method hiçbi yerde değil.
    //çalıştırabilmek için bind işlemi yapmak lazım.

    //props yapısı: bir konteyner dan diğer bir konteyner a veri taşımak istendiğinde
    //içerdeki verilere erişmek için bind işlemleri

    //state yapısı: o anda o datanın yani komponentin içinde kullanılan datanın, javascript objesinin ne durumda olduğunu söyler

    //virtualDOM değişen state yapısını farkeder ve anlık olarak bize sunar

  render() {
      console.log(this.props)
    return (
      <div>
          <button className='btn btn-success shadow mt-5' onClick={this.eventBindMethod}>Click Me</button>
      </div>
    )
  }
}
