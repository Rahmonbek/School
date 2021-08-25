import Aos from 'aos'
import axios from 'axios'
import React, { Component } from 'react'
import style from '../css/yutuqlarimiz.module.css'
import { url } from '../host/Host'
import img1 from '../img/ch1.jpg'
import img3 from '../img/ch2.jpeg'
import img4 from '../img/ch4.jpg'
import img2 from '../img/pp.svg'
export default class Yutuqlarimiz extends Component{
    state={
        loader:true,
        qabul:[],
        id:0,
        school:null,
          }
   
          getSchool=()=>{
              
  var a=window.location.href.split('/')
  var v=a[a.length-1]
            axios.get(`${url}/school-by-admin/${v}`).then(res=>{
                this.setState({
                    school:res.data,
              loader:false,
                })
                console.log(res.data)
            })
        }

componentDidMount(){
    Aos.init({
        duration:2000
    })
    this.getSchool();
}
funy=(x)=>{
    var mas=this.state.arr
    mas[x]=!this.state.arr[x]
    if(this.state.arr[x]){
        var a=document.querySelectorAll("p")[x]
    a.style.opacity="0"
a.style.height="0" }
else{
    var a=document.querySelectorAll("p")[x]
    a.style.opacity="1"
a.style.height="200px"
      
}
this.setState({
    arr:mas
})
}

render(){
     
    return(
        <div className={style.body}>
           
            <div style={{width:'100%'}}> <br/><br/><br/><br/><br/><h1 className={style.sarlavha}>Bizning yutuqlarimiz</h1>
            <div className={style.line}></div></div>
            <div className={style.karta}>
            <div style={{transition:"all 1s"}}><img src={img1}/>
            <h5>Saidahmedov Abdulboriy</h5></div><img style={{display:"none"}} onClick={()=>{this.f(0)}} src={img2}/>
            <h3>Falon kuni bo'lib o'tgan falon musobaqada falon o'rinni egalladi</h3>
            <p className={style.pop}>xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin.xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R. g . ideal gazdan keskin farq qiladi.
                 Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R.g . holatining yarimempirik va nazariy tenglamalari ham mavjud, Mas, VanderVaals tenglamasi</p>
                 {/* <span onClick={()=>{this.funy(0)}}>{this.state.arr[0]?"Batafsil...":"Yopish"}</span> */}
            </div>
            <div className={style.karta}>
            <div style={{transition:"all 1s"}}><img src={img1}/>
            <h5>Saidahmedov Abdulboriy</h5></div><img style={{display:"none"}} onClick={()=>{this.f(0)}} src={img2}/>
            <h3>Falon kuni bo'lib o'tgan falon musobaqada falon o'rinni egalladi</h3>
            <p className={style.pop}>xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin.xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R. g . ideal gazdan keskin farq qiladi.
                 Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R.g . holatining yarimempirik va nazariy tenglamalari ham mavjud, Mas, VanderVaals tenglamasi</p>
                 {/* <span onClick={()=>{this.funy(1)}}>{this.state.arr[1]?"Batafsil...":"Yopish"}</span> */}
            </div>
            <div className={style.karta}>
            <div style={{transition:"all 1s"}}><img src={img1}/>
            <h5>Saidahmedov Abdulboriy</h5></div><img style={{display:"none"}} onClick={()=>{this.f(0)}} src={img2}/>
            <h3>Falon kuni bo'lib o'tgan falon musobaqada falon o'rinni egalladi</h3>
            <p className={style.pop}>xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin.xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R. g . ideal gazdan keskin farq qiladi.
                 Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R.g . holatining yarimempirik va nazariy tenglamalari ham mavjud, Mas, VanderVaals tenglamasi</p>
                 {/* <span onClick={()=>{this.funy(2)}}>{this.state.arr[2]?"Batafsil...":"Yopish"}</span> */}
            </div>
            <div className={style.karta}>
            <div style={{transition:"all 1s"}}><img src={img1}/>
            <h5>Saidahmedov Abdulboriy</h5></div><img style={{display:"none"}} onClick={()=>{this.f(0)}} src={img2}/>
            <h3>Falon kuni bo'lib o'tgan falon musobaqada falon o'rinni egalladi</h3>
            <p className={style.pop}>xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin.xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R. g . ideal gazdan keskin farq qiladi.
                 Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R.g . holatining yarimempirik va nazariy tenglamalari ham mavjud, Mas, VanderVaals tenglamasi</p>
                 {/* <span onClick={()=>{this.funy(3)}}>{this.state.arr[3]?"Batafsil...":"Yopish"}</span> */}
            </div>
            <div className={style.karta}>
            <div style={{transition:"all 1s"}}><img src={img1}/>
            <h5>Saidahmedov Abdulboriy</h5></div><img style={{display:"none"}} onClick={()=>{this.f(0)}} src={img2}/>
            <h3>Falon kuni bo'lib o'tgan falon musobaqada falon o'rinni egalladi</h3>
            <p className={style.pop}>xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin.xossalari molekula (atom) larining oʻzaro taʼsiriga bogʻliq gaz. 
                Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R. g . ideal gazdan keskin farq qiladi.
                 Oddiy sharoitda molekulalarning oʻrtacha potensial energiyasi kinetik energiyasidan ancha kichik boʻlganda 
                R.g .ni ideal gaz deb hisoblash mumkin. Bunda R. g . ideal gaz krnunlariga boʻysunadi. Yuqori bosim va past tralarda
                 R.g . holatining yarimempirik va nazariy tenglamalari ham mavjud, Mas, VanderVaals tenglamasi</p>
                 {/* <span onClick={()=>{this.funy(4)}}>{this.state.arr[4]?"Batafsil...":"Yopish"}</span> */}
            </div>
           
        </div>
    )
}
}