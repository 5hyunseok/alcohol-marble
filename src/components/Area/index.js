import styled from "styled-components";
import { IndexUtils } from "../../utils";

function Area({ index }) {
  const isSquare = IndexUtils.isSquare(index);
  const isInner = IndexUtils.isInner(index);
  return (
    <Wrapper isSquare={isSquare} isInner={isInner}>
      <h4>{/* {index} {Math.floor(index / 9)} {index % 9} */}</h4>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.isSquare ? "#F9AC3D" : props.isInner ? "#985914" : "#2b2017"};
  border: ${(props) => (props.isInner ? "" : "1px solid black")};
`;

export default Area;
