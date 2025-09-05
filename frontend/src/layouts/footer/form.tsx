function Form() {
    return (
    <div className="footerForm">
        <form action="http://localhost:3000/api/form" method="post">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name"/>
            <label htmlFor="email">Correo</label>
            <input type="text" name="email"/>
            <label htmlFor="phone">Celular</label>
            <input type="text" name="phone" className="Celular"/>
            <label htmlFor="description">Consulta</label>
            <textarea name="description" id=""></textarea>
            <button type="submit" onClick={window.location.reload}>Enviar</button>
        </form>
    </div>
    )
}

export default Form