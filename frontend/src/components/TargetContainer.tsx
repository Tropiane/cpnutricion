import type { targetData } from "./PlanTarget"

import TargetCarousel from "./hooks/TargetCarousel"
import { PlanTarget } from "./PlanTarget"

const planes: targetData[] = [
    {
        id: 1,
        title: "Plan 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "/src/assets/white-plan.png"
    },
    {
        id: 2,
        title: "Plan 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "/src/assets/green-plan.png"
    },
    {
        id: 3,
        title: "Plan 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "/src/assets/orange-plan.png"
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