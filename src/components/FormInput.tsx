import { Input } from "./ui/input"
import { Label } from "./ui/label"

type FormInputProps = {
    label: string
    name: string
    type: string
    defaultValue: string|undefined
    placeholder:string
}
const FormInput = ({label, name, type, defaultValue, placeholder}: FormInputProps) => {
  return (
    <div>
        <Label className="" htmlFor={name}>{label || name}</Label>
        <Input 
            id={name} 
            name={name} 
            type={type} 
            defaultValue={defaultValue ? defaultValue : ""}
            placeholder={placeholder}
        ></Input>
    </div>
  )
}

export default FormInput