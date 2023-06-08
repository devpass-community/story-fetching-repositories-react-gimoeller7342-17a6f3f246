import React, { useState } from "react";
import { ListGroup, Button, Spinner } from "react-bootstrap";
import "./styles.css";

const List = () => {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = 'https://api.github.com/users/devpass-tech/repos'

  const fetchRepositories = async () => {
    setIsLoading(true)
    fetch(url).then(response => response.json()).then(data => {
      setRepositories(data)
      setIsLoading(false)
    })
  };

  return (
    <div className="list">
      <div className="container">
        <h2 className="title">Devpass Repositories</h2>

        { isLoading ?
        ( <Spinner/> ) : 
        ( 
          <ListGroup className="repositoriesList">

          {repositories.map(repository => <ListGroup.Item>{repository.name}</ListGroup.Item>  )}
          
          </ListGroup> )}
      <Button data-testid="button" className="button" variant="primary" onClick={() => fetchRepositories()}>Fetch repositories</Button>
      </div>
    </div>
  );
};

export default List;
