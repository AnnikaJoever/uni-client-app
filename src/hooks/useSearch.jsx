import { useState } from 'react';

const useSearch = (type) => {
    const [ value, setValue ] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    return {
        type,
        value,
        onChange,
    };
};

export default useSearch;
