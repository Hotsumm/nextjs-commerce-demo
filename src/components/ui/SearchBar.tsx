import styled from '@emotion/styled';
import Search from 'src/components/ui/icons/Search';

export default function SearchBar() {
  return (
    <>
      <SearchBarWrap>
        <label htmlFor="search">Search</label>
        <input id="search" placeholder="Search for products..." />
        <SearchIcon>
          <Search />
        </SearchIcon>
      </SearchBarWrap>
    </>
  );
}

const SearchBarWrap = styled.div`
  min-width: 300px;
  position: relative;
  width: 100%;
  border-width: 1px;
  border-color: #333;
  background: #000;
  font-size: 1rem;
  color: #fff;
  label {
    display: none;
  }
  input {
    width: 100%;
    line-height: 1.5rem;
    appearance: none;
    border: 1px solid #e5e7eb;
    background: transparent;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  }
`;

const SearchIcon = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding-right: 0.75rem;
  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;
