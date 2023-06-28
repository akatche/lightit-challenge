import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Guest({ children }) {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-teal-300">
            <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 border-4 border-teal-400">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex justify-center pb-4 border-b border-teal-400">
                        <ApplicationLogo />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
