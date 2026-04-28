import { useEffect, useState } from 'react';
import { supabase } from './supabase_client';

export default function SupaData() {
    const [fetchError, setFetchError] = useState(null);
    const [tableData, setTableData] = useState(null);

    useEffect(() => {
        const fetchSupa = async () => {
            const { data, error } = await supabase
                .from('ProductData')
                .select('*'); 

            if (error) {
                setFetchError('Could not fetch the Table data');
                setTableData(null);
                console.log(error);
            }
            if (data) {
                setTableData(data);
                setFetchError(null);
                console.log(data);
            }
        };

        fetchSupa(); 
    }, []);

    return (
        <div>
            {fetchError && <p>{fetchError}</p>}
            
            {tableData && (
                <div>
                    {tableData.map((product) => (
                        <div key={product.id || product.Name}> 
                            <p><strong>Name:</strong> {product.Name}</p>
                            <p><strong>Type:</strong> {product.type}</p>
                            <p><strong>Date:</strong> {product.Date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}