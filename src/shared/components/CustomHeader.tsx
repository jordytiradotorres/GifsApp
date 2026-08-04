interface ICustomHeader {
    title: string
    description?: string
}

export const CustomHeader = ({title, description}: ICustomHeader) => {
    return (
        <div className="content-center">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    )
}
