import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';

const BottomNavWrapper = styled.div`
  height: 3.75rem;
  display: flex;
  justify-content: row;
  align-items: center;
  background-color: #a1e1ec;

  span {
    font-size: 1.25rem;
    font-family: 'OpensansBold';
  }

  svg {
    position: absolute;
    left: 20px;
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export const BottomNavLayout = () => {
  const nav = useNavigate();

  return (
    <BottomNavWrapper
      style={{
        backgroundImage: 'url(/assets/TabBar.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    ></BottomNavWrapper>
  );
};
