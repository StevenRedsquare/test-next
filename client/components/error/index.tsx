import React from 'react';
import type { Error } from "@/utils/error";
import { Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';

interface Props {
    error: Error | null;
    title: string;
}

const ErrorComponent: React.FC<Props> = ({title, error}) => {
    return (
        <>
            <title>{title}</title>
            <Result 
                status={error?.status as ResultStatusType}
                title="Something went wrong."
                subTitle={`${error?.code}: ${error?.message}`}

            />
        </>
    )
}

export default ErrorComponent