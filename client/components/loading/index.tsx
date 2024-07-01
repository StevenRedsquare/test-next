interface Props {
    title: string;
}

const LoadingComponent: React.FC<Props> = ({title}) => {
    return (
        <>
            <title>{title}</title>
            <div>
                LOADING ...
            </div>
        </>
    )
}

export default LoadingComponent