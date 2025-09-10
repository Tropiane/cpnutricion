export interface targetData {
    id: number,
    title: string,
    description: string,
    image?: string,
    details?: string[]
}
export const PlanTarget = ({id, title, description, image, details}: targetData) => {
    return (
        <>
            <div key={id} className="planTarget" style={{backgroundImage: `url(${image})`}}>
               <h2 className="nunito-bold-italic">{title}</h2>
               <p className="lato-bold-italic">{description}</p>
               <ul className="lato-regular">
                {details?.map((detail) => <li className="lato-regular">{detail}</li>)}
               </ul>
            </div>
        </>
    )
}