import React, { Component } from 'react'

export default class EventStringifyParse extends Component {

    //object ==> String
    objectToString(){
        console.log("object tıklandı")
        let obj={
            frontend:"Html5",
            backend:"Java"
        }
        console.log(obj)
        const objectToString=JSON.stringfy(obj);
        console.log(objectToString)
    }

    //String ==> object
    stringToObject(){
        console.log("string tıklandı")
        let obj={
            frontend:"Html5",
            backend:"Java"
        }
        // const objectToString=JSON.stringfy(obj);
        // const stringToString=JSON.parse(objectToString);
        const stringToString=JSON.parse(JSON.stringfy(obj));
        console.log(this.stringToObject)
    }

  render() {
      console.log(this.props)
      const {header,classData}=this.props;
    return (
      <div>
          <p className='text-primary text-center mt-3' style={{fontSize:"43px"}} >{this.props.header}</p>
          <p>{header}</p>
          <p>{classData}</p>

          {/* Event: olay camelCase olarak yazılır */}
          <button className='btn btn-primary' onClick={this.objectToString}>Object To String</button>
          <button className='btn btn-danger' onClick={this.stringToObject}>String To Object</button>
      </div>
    )
  }
}

//export default MainClass;
//prop drilling:küçük ölçekli uygulama
//context api: orta ölçekli uygulama
//redux api: büyük ölçekli uygulama