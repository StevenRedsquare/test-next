import { Spin } from 'antd';

interface Props {
    title: string;
}

const LoadingComponent: React.FC<Props> = ({title}) => {
    return (
        <>
            <title>{title}</title>
            <Spin 
                tip="loading"
                size="large"
                style={{height:'100vh'}}
            >
                <div></div>
            </Spin>

        </>
    )
}

export default LoadingComponent