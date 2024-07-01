import type { Error } from "@/utils/error";

interface Props {
    error: Error | null;
    title: string;
}

const ErrorComponent: React.FC<Props> = ({title, error}) => {
    return (
        <>
            <title>{title}</title>
            <div>
                BAD PAGE
                <p>{error?.status}</p>
                <p>{error?.code}</p>            
                <p>{error?.message}</p>
            </div>
        </>
    )
}

export default ErrorComponent