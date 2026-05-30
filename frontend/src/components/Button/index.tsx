
{/* objeto propriedade*/}
export interface ButtonProp{
    variant? : "primary" | "secondary" | "warning" | "danger";
    value: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}
export const Button = (
    {variant="primary", value="Button", type="button", onClick}:ButtonProp,
)=>{
    return(
        <div className="d-grid gap-2">
            <button className={`btn btn-${variant}`} type={type} onClick={onClick}>
                {value}
            </button>
        </div>
    );
}