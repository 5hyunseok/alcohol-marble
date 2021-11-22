import styled from "styled-components";

function Board({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: calc(100vh - 38px);
  height: calc(100vh - 38px);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  grid-template-rows: 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  justify-content: center;
  &:after {
    display: block;
    padding-bottom: 100%;
  }
`;
export default Board;
