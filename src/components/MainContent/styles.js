import styled from 'styled-components';

export const Main = styled.div`

  /* background-color: beige; */
  height: 450px;
  margin-left: 60px;
  margin-top: 60px;

.container {
  width: 100%;
  height: 100%;
  background-color: transparent;
}


.main--content {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
}

.title--content {
  text-transform: uppercase;
  font-size: 36px;
  margin-bottom: 30px;
}

.list--content ul li{
  cursor: pointer;
  font-size: 28px;
  display: inline-block;
  margin-right: 60px;
  margin-top: 30px;
}

.list--content ul li:hover {
  color: #07172d;
  font-weight: bold;
}

.portfolio--content {
  display: inline-block;
  margin-top: 30px;
  padding: 10px;
  background-color: #c3a799;
  border-radius: 10px;
  font-size: 24px;
  text-transform: uppercase;
}

.portfolio--content a {
  color: black;
}

.invite--projects p  {
  margin-top: 15px;
  font-size: 20px;
}


`;

