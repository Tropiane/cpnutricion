import TargetCarousel from "./hooks/TargetCarousel"
import { PlanTarget } from "./PlanTarget"

const planes = [
    {
        id: 1,
        title: "Plan 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        id: 2,
        title: "Plan 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        id: 3,
        title: "Plan 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
]


export const TargetContainer = () => {
    return (
        <div className="targetContainer">
            <TargetCarousel>
                {
                    planes.map((plan)=>(
                        plan && <PlanTarget key={plan.id} id={plan.id} title={plan.title} description={plan.description} />
                    ))
                }
            </TargetCarousel>
        </div>
    )
}