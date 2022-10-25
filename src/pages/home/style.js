import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    h1 {
        background-image: linear-gradient(
            300deg,
            rgb(149 114 252 ),
            rgb(226 212 92 ),
            rgb(67 231 173  )
          );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
        text-align: center;
        margin: 4rem;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 300px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    img:hover {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
    }
    span {
        font-weight: bold;
        margin-top: 1rem;
        font-size: 120%;
        text-align: center;
    }
    a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
        font-size: 120%;
        text-align: center;
        margin-top: 1rem;
        transition: all 0.4s;
    }
    a:hover {
        transform: scale(1.2);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 1rem 8rem;
    border: none;
    border-radius: 15px;
    color: #909090;
    background-color: #121212;
    font-weight: 1000;
    font-size: 12 px;
    cursor: pointer;
    transition: all 250ms;
`;
