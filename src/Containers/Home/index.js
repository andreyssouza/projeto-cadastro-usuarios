import React from "react"
import axios from "axios"
import { useState, useRef, } from "react"
import { Container, Image, InputLabel, Input, ArrowImage, } from './styles'
import People from '../../assets/people.png'
import Arrow from '../../assets/arrow.png'
import { useNavigate } from 'react-router-dom'

import H1 from "../../Components/Title"
import ContainerItens from "../../Components/ContainerItens"
import Button from "../../Components/Button"

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();



  async function AddEvent() {

    const { data } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, data.user]);

    navigate("/Users");


  }


  return (
    <Container>
      <Image alt="" src={People} />
      <ContainerItens>
        <H1> Olá</H1>

        <InputLabel> Nome Completo </InputLabel>

        <Input ref={inputName} placeholder=" Digite o seu nome" />

        <InputLabel> Idade </InputLabel>

        <Input ref={inputAge} placeholder="Digite a sua idade" />

        <Button onClick={AddEvent}> Cadastrar
          <ArrowImage src={Arrow} alt="" />
        </Button>


      </ContainerItens>

    </Container>

  )
}
export default App