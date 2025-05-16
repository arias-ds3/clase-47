import Alumno from "./alumno.js"
// Componente Principal
const App = () => { // Nuevo index.js
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Hola Mundo"),
        React.createElement(Alumno, {
            nombre: "Martín",
            lenguaje: "JS",
            intereses: ["Helado", "Fútbol", "Danza"],
        }),
        React.createElement(Alumno, {
            nombre: "Alejandra",
            lenguaje: "JS",
            intereses: ["Helado", "Fútbol", "Viajes", "Música"],
        }),
        React.createElement(Alumno, {
            nombre: "Lucrecia",
            lenguaje: "JS",
            intereses: ["Helado", "Danza", "Viajes"],
        })
    )
}






//ejemplo props

//este es el hijo de app
// const Ejemplo = props => React.createElement("h1", {}, props.titleProp)
 
// const App = () => {

//     let titleProp = "Hola Mundito!!"

//     return React.createElement(Ejemplo, { titleProp })
// }


// Vanilla JS
const rootDiv = document.getElementById("root")
// Seteo del componente principal en nuestra página
ReactDOM.render(React.createElement(App), rootDiv)