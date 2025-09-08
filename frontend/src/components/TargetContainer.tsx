import type { targetData } from "./PlanTarget"

import TargetCarousel from "./hooks/TargetCarousel"
import { PlanTarget } from "./PlanTarget"

const planes: targetData[] = [
    {
        id: 1,
        title: "Plan 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "https://drive.google.com/thumbnail?id=11y1QA9SoNREY6EjQpZNOPBvZBEeNJo6v&sz=w1000"
    },
    {
        id: 2,
        title: "Plan 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "https://drive.google.com/thumbnail?id=1wV3xwQhuxQu3x9ZTYcFI1SdF2nmwPk31&sz=w1000"
    },
    {
        id: 3,
        title: "Plan 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "https://drive.google.com/thumbnail?id=1rgIv_9HuttywpKEWaEku_9CasYy82ICr&sz=w1000"
    },
]


export const TargetContainer = () => {
    return (
        <div className="targetContainer">
            <TargetCarousel>
                {
                    planes.map((plan)=>(
                        plan && <PlanTarget key={plan.id} id={plan.id} title={plan.title} description={plan.description} image={plan.image}/>
                    ))
                }
            </TargetCarousel>
        </div>
    )
}