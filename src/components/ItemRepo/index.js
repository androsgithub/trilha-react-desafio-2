import React from "react";

import { ItemContainer, Row } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <Row>
        <a href={repo.html_url} rel="noreferrer" target="_blank">
          <button onClick={handleRemove}>Ver repositório</button>
        </a>
        <button onClick={handleRemove} className="remover">
          Remover
        </button>
      </Row>
    </ItemContainer>
  );
}

export default ItemRepo;
