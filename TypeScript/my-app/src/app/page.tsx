import React, { Children, ComponentProps, useState } from "react"
import { Dispatch,SetStateAction } from "react"
import { ComponentPropsWithoutRef } from "react"


type Linkprops = ComponentProps<"a"> & {
  dark?: string;
  variante? : "Primary" | "Secundary"
}
const Link = ( {dark,variante}:Linkprops) => {
  return(
    <a >Text</a>
  )
  } 

function page(){
  return(
    <div>
      <Link>
        </Link>
    </div>
  )
}
// type Linkprops = ComponentProps<"a">
// const Link = ( {onClick , ...x}:Linkprops) => {
  
//   const Hande = () =>{
//     if(onClick){
//       alert("Toock")
//     }
//   }
//   return(
//     <a  onClick={Hande}{...x}>hola</a>
//   )
// }
// function page(){
//   return(
//     <div>
//       <Link  onClick={() =>{
//         alert("Hola mundo")
//       }}>hola
//       </Link>
//     </div>
//   )
// }
// type Linkprops = ComponentProps<"a">
// const Link = ({href} :Linkprops) => {
//   return(
//     <a ></a>
//   )
// }
// function page(){
//   return(
//     <div>
//       <Link/>
//     </div>
//   )
// }

// type ButtomProps = {
//   title? : string

// }
// const Buttom = ({title = "Text Here!  "} :ButtomProps) => {
//   return(
//     <button>{title}</button>
//   )
// }
// function page(){
//   return(
//     <div>
//       <Buttom />
//     </div>
//   )
// }
// type ButtomProps= {
//   setcount : Dispatch<React.SetStateAction<number>>

// }



// const Buttom = ({setcount}: ButtomProps) => {
  
//   return(
//     <button onClick={() => setcount(10)}>Test</button>
//   )
// }
// function Page(){
//   const [count, setcount]= useState(0)
//   return(
//     <div>
//       <h1>{count}</h1>
//       <Buttom setcount={setcount}/>
//     </div>
//   )
// }
// export default Page;



// type ButtomProps= {
//   children : React.ReactNode
// }

// type ButtomProps= {
//   Onclick : () => void;
//   userage? : Record<string,Number>;
// // }

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
// Onclick : () => void;
//   userage? : Record<string,Number>;
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
//"use client"
// import { Judson } from "next/font/google"
// import React from "react"

// let nombre:string = "a"
// let usuario = {
//   edad : 22,
//   nombre: "jose"
// }
// function Mostarar(usuario:any){
//   return(
//     <div>
//       <h1>{usuario.edad}</h1>
//     </div>
//   )
// }

// function Title(nombre:string){
//   return(
//     <div>
//       <title>{nombre}</title>
//     </div>
//   )
// }