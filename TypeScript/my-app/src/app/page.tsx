"use client"
import { Judson } from "next/font/google"
import React from "react"

let nombre:string = "a"
let usuario = {
  edad : 22,
  nombre: "jose"
}
function Mostarar(usuario:any){
  return(
    <div>
      <h1>{usuario.edad}</h1>
    </div>
  )
}

function Title(nombre:string){
  return(
    <div>
      <title>{nombre}</title>
    </div>
  )
}

type ButtomProps= {
  Onclick : () => void;
  userage? : Record<string,Number>;
}



const Buttom = ({Onclick}: ButtomProps) => {
  return(
    <button onClick={Onclick}>Tests</button>
  )
}
function Page(){
  return(
    <div>Page
      <Buttom 
      Onclick={() => {
        alert("Funciona") 
      }}
       />
    </div>
  )
}
export default Page;





// function Buttom(props: ButtomProps){
//   const{text,subtitle,color} = props
//   return(
//     <button>{text}</button>
//   )
// }
// function Buttom({text,subtitle,color}: ButtomProps){
//   return(
//     <button>{text}</button>
//   )
// }
// function Buttom(props:{text:string, subtitle: string, color: string}){
//   return(
//     <button>{props.text}</button>
//   )
// }
// type ButtomProps= {
//   text: string
//   subtitle? : string
//   color? : color
//   bagraundcolor? : color
// }



// const Buttom = ({text}:ButtomProps) => {
//   return(
//     <button>{text }</button>
//   )
// }
// type ButtomProps= {
//   pading : [number,number,number?,number?]
// }

// type ButtomProps= {
//   style : React.CSSProperties;
// }
