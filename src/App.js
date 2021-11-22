import Board from "./components/Board";
import Area from "./components/Area";

import styled from "styled-components";
import { ThemeProvider, TaskBar, List } from "@react95/core";
import { ReaderDisket2, HelpBook, Computer3, Settings } from "@react95/icons";
import "@react95/icons/icons.css";

const App = () => (
  <ThemeProvider>
    <Wrapper>
      <div className="container">
        <TaskBar
          list={
            <List>
              <List.Item
                icon={<ReaderDisket2 variant="32x32_4" />}
                onClick={() => {}}
              >
                Load Game
              </List.Item>
              <List.Item
                icon={<HelpBook variant="32x32_4" />}
                onClick={() => {}}
              >
                Help
              </List.Item>
              <List.Item
                icon={<Settings variant="32x32_4" />}
                onClick={() => {}}
              >
                Settings
              </List.Item>
              <List.Divider />
              <List.Item
                icon={<Computer3 variant="32x32_4" />}
                onClick={() => {}}
              >
                Restart Game
              </List.Item>
            </List>
          }
        />
        <Board>
          {Array.apply(0, Array(81)).map(function (x, i) {
            return <Area key={i} index={i} />;
          })}
        </Board>
        {/* <HorizontalRectangle /> */}
      </div>
    </Wrapper>
  </ThemeProvider>
);

const Wrapper = styled.div`
  margin: 5px;
`;

export default App;
