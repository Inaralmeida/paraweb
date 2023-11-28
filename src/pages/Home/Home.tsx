import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import { homeData } from "../../core/home";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Banner
      opacity
        title=""
        image="/banners/banner_home.jpg"
      />

      <StylesHome>
        {homeData.map((item, id) => {
          return (
            <div key={id} className="card" onClick={() => navigate(item.to)}>
              <div className="picture">
                <img src={item.image} alt={`Capa da pagina ${item.title}`} />
              </div>
              <div className="contentCard">
                <h3>{item.title}</h3>
                <small>Por: {item.by}</small>
                <hr />
                <p>{item.preview}</p>

                <footer>
                <a href={item.to}>Leia mais</a>
              </footer>
              </div>
              
            </div>
          );
        })}
      </StylesHome>
    </div>
  );
};

export default Home;

const StylesHome = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  > .card {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 24px;
    background-color: #eee1d7;
    border-radius: 0 8px 8px 0;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    transition: all 0.3s;
    &:hover{
      transform: scale(1.02);
    }

    .picture{
      width: 350px;
      height: 200px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
     
    }


    img {
        width: 350px;
        height: 200px;
        object-fit: cover;
        border-radius: 8px 0 0 8px;

      }

    > .contentCard {
      padding: 12px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      

      > hr{
        width: 100%;
        height: 1px;
        background-color: black;
      }

      > footer{
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        align-self: flex-end;

        > a{
          cursor: pointer;
          transition: all 0.3s;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    > .card{
      padding-top: 12px;
      flex-direction: column;
      border-radius: 8px;
      > .picture{
        width: 100%;
        > img{
      border-radius: 8px;

        }
      }
    }
  }
`;
