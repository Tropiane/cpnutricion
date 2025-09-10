
const aboutMeData = [
    {
        title: "¿Sentís que la alimentación se volvió más una carga que un disfrute? 🌱",
        text: "No tiene por qué ser así 💚",
        details: ["✨ Te acompaño a lograr tus objetivos sin culpas, sin restricciones extremas y sin aburrirte con la comida.", "✨ Vamos a construir un plan real, flexible y pensado para vos.",
        "✨ Mi misión es que disfrutes de cuidarte y te sientas en paz con tu cuerpo 🤍"
        ],
        secondTitle: "Podemos hacer que la nutrición sea simple, cercana y parte de tu vida diaria ✨"
    }
]

export const Main = () =>{
    return (
        <main>
            <div className="aboutMe" id="about">
                <img src="https://images.unsplash.com/photo-1618842688917-0540b01cb7fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mujer desayunando" />
                <h2 className="nunito-bold-italic">{aboutMeData[0].title}</h2>
                <p className="lato-regular">{aboutMeData[0].text}</p>
                <ul>
                    {aboutMeData[0].details.map((detail) => <li className="lato-regular">{detail}</li>)}
                </ul>
                <h3 className="nunito-bold-italic">{aboutMeData[0].secondTitle}</h3>
            </div>
        </main>
    )
}