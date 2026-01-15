import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Container, Image, ArrowImage, User } from './styles'
import Arrow from '../../assets/arrow.png'
import Trash from '../../assets/trash.png'
import Avatar from '../../assets/avatar.png'
import { useNavigate} from 'react-router-dom'
import H1 from "../../Components/Title"
import ContainerItens from "../../Components/ContainerItens"
import Button from "../../Components/Button"


const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  function goBack() {
    navigate("/")
  }


  async function fetchUsers() {
    const { data: responseData } = await axios.get('http://localhost:3001/users');
    console.log(responseData.users);
    setUsers(responseData.users);
    
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    fetchUsers();
  
  }






  return (
    <Container>
      <Image alt="avatar-image" src={Avatar} />
      <ContainerItens $isBlur={true}>
        <H1> Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lixeira" />
              </button>
            </User>
          ))}
        </ul>

        <Button $isBack={true} onClick={goBack}> Voltar
          <ArrowImage src={Arrow} alt="arrow-inverter" />
        </Button>


      </ContainerItens>

    </Container>

  );
};

export default Users