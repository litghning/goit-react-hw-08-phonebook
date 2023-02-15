import React from 'react';
import { FormControl } from '@mui/material';
import { StyledInput, StyledInputLable } from 'components/Styled/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filter';
import { selectFilter } from 'redux/selectors';

const Filters = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    dispatch(addFilter(query.toLowerCase()));
  };
  const filter = useSelector(selectFilter);

  return (
    <FormControl
    sx={{ width: '48ch', mr: 'auto', ml: 'auto' }}
    variant="standard"
    autoComplete="off"
  >
    <StyledInputLable htmlFor="standard-search-by-name">
      Find contact by name
    </StyledInputLable>
    <StyledInput
      id="standard-search-by-name"
      type="search"
      name="filterContact"
      value={filter}
      onChange={e => onFilterChange(e.target.value)}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    />
  </FormControl>
   
  );
};

export default Filters;