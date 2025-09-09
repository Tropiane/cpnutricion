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
               <h2 className="nunito-bold-italic">{title}</h2>
               <p className="lato-regular">{description}</p>
               <ul className="lato-regular">
                <li>detalle</li>
                <li>detalle</li>
                <li>detalle</li>
               </ul>
            </div>
        </>
    )
}