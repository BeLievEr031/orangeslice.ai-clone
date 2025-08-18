import { Check } from "lucide-react"
import { useState } from "react"
interface IProp {
    title: string;
}
function CheckBox({ title }: IProp) {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setIsChecked(!isChecked)}
        >
            <div className='relative'>
                <input
                    type="checkbox"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow  appearance-none"
                    checked={isChecked}
                />

                {isChecked && <Check className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-none:' size={12} />}
            </div>

            <label
                htmlFor="clean_tech"
                className="text-base font-light leading-none tracking-tight text-neutral-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {title}
            </label>
        </div>
    )
}

export default CheckBox