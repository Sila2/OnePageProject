import React, { Component } from 'react'

export default class FormBind extends Component {
    //karşıdan data gelecekse bu yapıyı yazıyoruz, props veriyorsa kullanıyoruz
    // constructor(props){
    //     super(props);
    // }

    onSubmitMethod(e){
        //alert('Merhabalar')
        e.preventDefault();
        ////performans niteliği sağlar.
        ////bu olmazsa butona tıklandığında refresh yapıyor ve tekrar alerti çalıştırıyor, bunu önler.
        //let name=e.target.elements.input_name;
        ////e ye git hedef bileşendeki elementte karşı tarafta yazmaya çalıştığımız bileşeni çağır.
        //console.log(name)

        let name2=e.target.element.input_name.value;
        console.log(name2+" = " +name2.length)

        let name3=e.target.element.input_name.value.trim;  //trim- gelen değeri boşlukları alarak göstersin
        console.log(name3+" = "+name3.length)
    }

  render() {
    return (
      <div>
          <form onSubmit={this.onSubmitMethod}>
              {/* div.container>div.row>div.col-md-3+div.col-md-9 */}
              {/* <div className="container">
                  <div className="row">
                      <div className="col-md-3"></div>
                      <div className="col-md-9"></div>
                  </div>
              </div> */}
              <span>adınızı girin</span>
              <input className='form-control61' type="text" name='input_name'/>
              <button type='submit' className='btn btn-primary mt-1'>Gönder</button>
          </form>
      </div>
    )
  }
}
