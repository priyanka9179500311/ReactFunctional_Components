//structure of react login file

//1.Import Area
//import something from somelibrary

import React from 'react';

import ReactDOM from 'react-dom';

//let x = <h1>Hello</h1>;
//create a functional component
function A(){
    return <h1>Hello A<B/></h1>
}
function B(){
    return <span>My Name is B<C/></span>
}
function C(){
    return <strong>My Name is C<D/></strong>
}
function D(){
    return <sub>My Name is D<E/></sub>
}
function E(){
    return <span>My Name is E<F/></span>
}
function F(){
    return <sub>My Name is F<G/></sub>
}
function G(){
    return <strong>My Name is G<H/></strong>
}
let H = ()=>{
    return <sub> My Name is H<I/></sub>
}
var I = ()=>{
    return <span>MY Name is I<J/></span>
}
const J = ()=>{
    return <sub>My Name is J<K/></sub>
}
let K = ()=> <strong>My Name is K<L/></strong>
let L = ()=> <sub>My Name is L<M/></sub>
let M = ()=> <span>My Name is M<N/></span>
function N(){
    return <sub>My Name is N<O/></sub>
}
function O(){
    return <span>My Name is O<P/></span>
}
let P = ()=>{
    return <sub>My Name is P<Q/></sub>
}
let Q = ()=>{
    return <span>My Name is Q<R/></span>
}
let R = ()=> <strong>My Name is R<S/></strong>
let S = ()=> <sub>My Name is S<T/></sub>
let T = ()=> <span>My Name is T<U/></span>
let U = ()=> <strong>My Name is U<V/></strong>
let V = ()=> <sub>My Name is V<W/></sub>
let W = ()=> <span>My Name is W<X/></span>
let X = ()=> <strong>My Name is X<Y/></strong>
function Y(){
    return <sub>My Name is Y<Z/></sub>
}
function Z(){
    return <span>My Name is Z</span>
}
//object.method();
ReactDOM.render(<A/>,document.getElementById('root'));//Actual Arg