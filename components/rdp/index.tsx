import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';


type RdpDetails = {
    hostname: string;
    username: string;
    password: string;
};

const RdpDetailsGenerator = () => {
    const { data: session } = useSession();
    const { name, email } = session?.user || {};
    const [rdpDetails, setRdpDetails] = useState<RdpDetails[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
        const storedRdpDetails = localStorage.getItem('rdpDetails');
        if (storedRdpDetails) {
            setRdpDetails(JSON.parse(storedRdpDetails));
            setIsDataFetched(true);
        }
    }, []);

    const handleClick = () => {
        axios({
            method: 'post',
            url: 'https://dishis.tech/feedbacks',
            data: {
              type: "User wanted RDP details",
              comment: "Provide user the RDP.",
              email: email,
              name: name
            }
        });
        setIsLoading(true);
        setTimeout(() => {
            fetch('/api/rdp-details')
                .then(response => response.json())
                .then((data: RdpDetails[]) => {
                    const shuffledData = shuffleArray(data);
                    setRdpDetails(shuffledData.slice(0, 1));
                    setIsLoading(false);
                    setIsDataFetched(true);
                    localStorage.setItem('rdpDetails', JSON.stringify(shuffledData));
                })
                .catch(error => console.error(error));
        }, 5000);
    };

    const shuffleArray = (array: RdpDetails[]) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
    };


    return (
        <div className="relative flex z-10 mt-20 justify-center">
            <div className="max-w-2xl mx-5 w-full bg-white rounded-lg shadow-lg px-8 py-6">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">RDP Details Generator</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClick}
                    disabled={isLoading || isDataFetched}
                >
                    {isLoading ? 'Generating RDP Details...' : 'Generate RDP Details'}
                </button>
                {rdpDetails.length > 0 && (
                    // <table className="table-fixed w-full mt-4">
                    //     <thead>
                    //         <tr>
                    //             <th className="w-1/3 sm:px-4 px-1 py-2 sm:text-base text-xs">Hostname</th>
                    //             <td className="border px-4 py-2">
                    //                 <div className="flex items-center">
                    //                     <span className="mr-2 sm:text-base text-xs">{rdpDetails[0].hostname}</span>
                    //                     <button
                    //                         className="hover:bg-gray-100 fill-black font-bold py-1 px-2 rounded"
                    //                         onClick={() => handleCopy(rdpDetails[0].hostname)}
                    //                     >
                    //                         <Copy />
                    //                     </button>
                    //                 </div>
                    //             </td>
                    //         </tr>
                    //         <tr>
                    //             <th className="w-1/3 sm:px-4 px-1 py-2 sm:text-base sm:text-base text-xs">Username</th>
                    //             <td className="border px-4 py-2">
                    //                 <div className="flex items-center">
                    //                     <span className="mr-2 sm:text-base text-xs">{rdpDetails[0].username}</span>
                    //                     <button
                    //                         className="hover:bg-gray-100 fill-black font-bold py-1 px-2 rounded"
                    //                         onClick={() => handleCopy(rdpDetails[0].username)}
                    //                     >
                    //                         <Copy />
                    //                     </button>
                    //                 </div>
                    //             </td>
                    //         </tr>
                    //         <tr>
                    //             <th className="w-1/3 sm:px-4 px-1 py-2 sm:text-base text-xs">Password</th>
                    //             <td className="border px-4 py-2">
                    //                 <div className="flex items-center">
                    //                     <span className="mr-2 sm:text-base text-xs">{rdpDetails[0].password}</span>
                    //                     <button
                    //                         className="hover:bg-gray-100 fill-black font-bold py-1 px-2 rounded"
                    //                         onClick={() => handleCopy(rdpDetails[0].password)}
                    //                     >
                    //                         <Copy />
                    //                     </button>
                    //                 </div>
                    //             </td>
                    //         </tr>
                    //     </thead>
                    // </table>
                    <div>
                        You will recieve all the details within 8 hours. Thank you for waiting.
                    </div>
                )}
            </div>
        </div>
    );
};

export default RdpDetailsGenerator;
