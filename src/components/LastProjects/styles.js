import styled from 'styled-components';

export const Cards = styled.div`
  .cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-left: 12%;
  margin-right: 13%;
  margin-bottom: 60px;
  }

  .card--img img {
  border: 5px solid #1d29852d;
  width: 320px;
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
}

.card--img img:hover {
  border: 5px solid #c3a799;
}

.project--name {
  font-family: 'Quicksand', sans-serif;
  margin-top: 15px;
  width: 280px;
  height: 21px;
  font-size: 22px;
  color: #07172d;
  font-weight: bold;
  margin-bottom: 5px;
}
`;