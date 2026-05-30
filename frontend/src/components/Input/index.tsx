
{/* objeto propriedade*/}
export interface InputProp{
    label: string;
    type: string;
    placeholder?: string;
    id: string;
}

export const Input = (

    {label, type, id, placeholder}: InputProp

) => {
    return(
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} placeholder={placeholder} />
        </div>
    );
}