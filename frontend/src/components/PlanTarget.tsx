interface Props {
    id: number,
    title: string,
    description: string,
}
export const PlanTarget = ({id, title, description}: Props) => {
    return (
        <>
            <div key={id} className="planTarget">
               <h2>{title}</h2>
               <p>{description}</p>
            </div>
        </>
    )
}