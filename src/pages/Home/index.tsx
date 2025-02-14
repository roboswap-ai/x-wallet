import { useHistory } from 'react-router-dom';
import images from 'src/images';
import { BUTTON_SIZE } from 'src/utils/constant';
import styled from 'styled-components';
import Button from '../../components/Buttons';

const DivTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;
const Image = styled.img<{ size: string; top: string; width: string }>`
  height: ${($props) => $props.size};
  width: ${($props) => ($props.width ? $props.width : $props.size)};
  margin: auto;
  cursor: ${(props) => props.cursor};
  margin-top: ${(props) => props.marginTop};
`;
const DivContent = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 25px;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  text-align: center;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    height: auto;
    margin-top: 100px;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
const DivChildButon = styled.div`
  margin: 90px 20px 0;
  @media screen and (max-width: 480px) {
    margin: 70px 20px 0;
  }
`;
const DivImage = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  font-weight: ${(props) => props.fontWeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;
const HomePage = () => {
  const history = useHistory();
  const goToTermsCondition = () => {
    history.push('/term-condition');
  };
  return (
    <Div>
      <Wrapper>
        <DivImage marginBottom="120px">
          <Image src={images.xWalletLogoSquare} size={200} width={200} alt="logo" />
        </DivImage>
      </Wrapper>
      <DivChildButon>
        <Button onClick={goToTermsCondition} size={BUTTON_SIZE.FULL} label="Start Now" />
      </DivChildButon>
    </Div>
  );
};
export default HomePage;
