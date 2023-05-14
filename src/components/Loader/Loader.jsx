import { FallingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader = () => (
  <LoaderWrap>
    <FallingLines
      color="var(--accent-color-dark)"
      width="40"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  </LoaderWrap>
);

export default Loader;
