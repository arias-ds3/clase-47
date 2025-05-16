// Componente Alumno
const Alumno = (props) => {
    // El tercer parámetro puede contener muchos componentes hijos dentro de un array [] o a través de un spread ...
    // Implementación de métodos de JS
    const interesesFormateados = props.intereses.join(", ")
 
    return React.createElement("div", {}, [
        // Props dentro de template strings
        React.createElement("h2", {}, `Nombre: ${props.nombre}`),
        React.createElement("h3", {}, `Lenguaje: ${props.lenguaje}❤`),
        React.createElement("h3", {}, `Intereses: ${interesesFormateados}.`),
    ])


} 
 
export default Alumno