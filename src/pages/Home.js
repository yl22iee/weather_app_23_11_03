import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import { styled } from "styled-components";

const Wrap = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 21%,
    rgba(4, 4, 39, 1) 100%,
    rgba(8, 17, 49, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const Location = styled.div``;

const Temp = styled.div``;

const Desc = styled.div``;

const Seper = styled.div``;

const ConWrap = styled.div``;

const Con = styled.div``;

export const Home = () => {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  console.log(data);

  // return <div>HEllo</div>;

  return (
    <>
      {isLoading ? (
        "loding"
      ) : (
        <Wrap>
          <Location>{data?.name}</Location>
          <Temp>{Math.round(data?.main?.temp)}</Temp>
          <Desc>Cloudy</Desc>

          <Seper></Seper>

          <ConWrap>
            <Con>
              <h3>체감온도</h3>
              <p>{Math.round(data?.main?.feelslike)}</p>
            </Con>
            <Con>
              <h3>최고온도</h3>
              <p>22c</p>
            </Con>
            <Con>
              <h3>최저온도</h3>
              <p>18c</p>
            </Con>
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};

// api에 요청할때 사용하는 hook
// 비동기 사용시 상태관리하는ㄴ hook
// useQuery를 사용할땐 반드시 QueryClientProvider를 설정해줘야 됨
