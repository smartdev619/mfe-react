import styled from 'styled-components';
import NxWelcome from './nx-welcome';
// import {MfeReactComponents} from 'lib/components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <MfeReactComponents /> */}
      <NxWelcome title="products" />
    </StyledApp>
  );
}

export default App;
