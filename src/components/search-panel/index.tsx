import React, { ChangeEvent, useState } from 'react';
import { OnSearchChangeFuncProps } from '../../types/list-item';

const SearchPanel = ({ onSearchChange }: OnSearchChangeFuncProps): JSX.Element => {
  const [tern, setTern] = useState('');

  const onSearchChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setTern(term);
    onSearchChange(term);
  };

  return <input type="text" placeholder="search" className="search-input" value={tern} onChange={onSearchChangeFunc} />;
};

export default SearchPanel;
