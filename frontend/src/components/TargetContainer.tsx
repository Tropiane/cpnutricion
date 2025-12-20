import type { TargetData } from "./PlanTarget"

import TargetCarousel from "./hooks/TargetCarousel"
import { PlanTarget } from "./PlanTarget"

const planes: TargetData[] = [
    {
        id: 1,
        title: "Plan Bienvenida — “Comenzar sin culpa”",
        description: "¿Querés arrancar con un espacio tranquilo para conectar con tu cuerpo sin juicios ni restricciones? Este plan es ideal para dar ese primer paso con contención y cariño.",
        image: "https://drive.google.com/thumbnail?id=11y1QA9SoNREY6EjQpZNOPBvZBEeNJo6v&sz=w1000",
        details: ["Sesión inicial (60 min): con escucha activa, acompaño tu historia y tus objetivos", "Plan personalizado según tu estilo de vida, preferencias y etapa", "1 seguimiento (30–45 min) para ajustar y acompañar tus primeros avances"]
    },
    {
        id: 2,
        title: "Plan Tranquilidad — “Cuidarte con confianza”",
        description: "Si buscás sostén constante pero flexible, este plan mensual te acompaña desde la calidez, sin que te agote ni te abrumes.",
        image: "https://drive.google.com/thumbnail?id=1wV3xwQhuxQu3x9ZTYcFI1SdF2nmwPk31&sz=w1000",
        details: ["Sesión inicial (60 min): diagnóstico detallado y plan adaptable", "2 seguimientos (30–45 min cada uno) para ir ajustando desde lo real y cotidiano, sin presión", "Apoyo vía mensajes o mail entre sesiones (contención real en tu día a día)"]
    },
    {
        id: 3,
        title: "Plan Transformación — “Crear paz con la comida”",
        description: "Para quienes desean transformar su relación con la alimentación desde el acompañamiento continuo, paso a paso, sin sacrificio y con mucho cuidado.",
        image: "https://drive.google.com/thumbnail?id=1rgIv_9HuttywpKEWaEku_9CasYy82ICr&sz=w1000",
        details: ["Sesión inicial ampliada (75–90 min): construcción de base sólida","6 seguimientos (30–45 min cada uno)","Planes ajustables mensuales","Comunicación abierta entre sesiones para contención emocional, dudas o ajustes","Revisión anual o cierre con pautas para continuar por tu cuenta"]
    },
]


export const TargetContainer = () => {
    return (
        <div className="targetContainer">
            <TargetCarousel>
                {
                    planes.map((plan)=>(
                        plan && <PlanTarget key={plan.id} id={plan.id} title={plan.title} description={plan.description} image={plan.image} details={plan.details}/>
                    ))
                }
            </TargetCarousel>
        </div>
    )
}