
const studyData = [
    {   
        id: 1,
        title: "Nutrición clínica/deportiva",
        description: "Te acompaño a encontrar un plan de alimentación que se adapte a tu estilo de vida y necesidades de salud. Ya sea que quieras mejorar tu rendimiento deportivo, recuperarte mejor después de entrenar o cuidar alguna condición de salud, la nutrición puede ser una gran aliada para sentirte con más energía y bienestar en tu día a día.",
        background: "#317c13b9",
        color: "#fff"
    },
    {   
        id: 2,
        title: "Alimentación vegana/vegetariana",
        description: "Si elegís una alimentación vegana o vegetariana, mi objetivo es ayudarte a que sea completa, variada y segura. Te asesoro para que recibas todos los nutrientes que tu cuerpo necesita, mientras respetamos tu elección y potenciamos los beneficios de una alimentación más consciente y sostenible.",
        background: "#cff42ab9",
        color: "#000"
    },
    {   
        id: 3,
        title: "Salud ginecologica",
        description: "La alimentación influye mucho en el bienestar femenino. Acompaño a mujeres en diferentes etapas, como la adolescencia, el embarazo o la menopausia, con planes pensados para cuidar la energía, la fertilidad, el equilibrio hormonal y aliviar síntomas que pueden aparecer en cada ciclo.",
        background: "#317c13be",
        color: "#fff"
    },
]
export const StudyDetails = () => {
    return (
        <div className="studyDetails">
            <h2 className="nunito-bold-italic">Mi enfoque</h2>
            <div className="studyDetailsTargets">
                {
                    studyData.map((target) => (
                        <div key={target.id} className="studyDetailTarget">
                            <details>
                                <summary style={{background: target.background , color: target.color}} className="nunito-bold-italic">{target.title}</summary>
                                <p className="lato-regular">{target.description}</p>
                            </details>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}