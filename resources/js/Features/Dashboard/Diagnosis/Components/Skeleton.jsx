import React, {useContext, useMemo} from 'react';
import DiagnosisContext from "@/Features/Dashboard/Diagnosis/DiagnosisContext.js";

const Skeleton = () => {

    const { diagnoses,fetchingDiagnosis } = useContext(DiagnosisContext);

    const showSkeleton = useMemo(() => {
        return diagnoses.length === 0 && fetchingDiagnosis;
    }, [diagnoses, fetchingDiagnosis]);

    return (
        <>
            {
                showSkeleton && <div
                    className="grow-0 basis-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow animate-pulse">

                    <dl className="text-gray-900 divide-y divide-gray-200">
                        <div className="flex flex-col pb-3">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                        <div className="flex flex-col pt-3">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        </div>
                    </dl>
                </div>
            }
        </>
    );
}


export default Skeleton;
