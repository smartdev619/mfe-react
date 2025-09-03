import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Button} from '@mfe-react/components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Button>Click me!</Button>
      <NxWelcome title="products" />
    </StyledApp>
  );
}

export default App;
