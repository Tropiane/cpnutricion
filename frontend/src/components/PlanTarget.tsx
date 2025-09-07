export interface targetData {
    id: number,
    title: string,
    description: string,
    image?: string
}
export const PlanTarget = ({id, title, description, image}: targetData) => {
    return (
        <>
            <div key={id} className="planTarget" style={{backgroundImage: `url(${image})`}}>
               <h2>{title}</h2>
               <p>{description}</p>
            </div>
        </>
    )
}