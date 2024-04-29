import styled from "@emotion/styled";
import { IPokemonAbility } from "pokeapi-typescript";
import { useEffect, useState } from "react";
type Props = {
    name: string | undefined;
    abilities: IPokemonAbility[] | undefined;
}
const CardContainer = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: hidden;
`;

const CardTitle = styled.h1`
    width: 100%;
    color: #ffff;

`;
const CardContent = styled.p`
    width: 80%;
    border-bottom: 1px solid #ffff; 
    padding-bottom: 10px;
`

export default function Card({name, abilities}: Props) {
    const[pokemonData, setPokemonData] = useState<Props | null>(null)
    
    useEffect(() => {
        setPokemonData({name, abilities})
    }, [])
  return (
    <CardContainer>
        <CardTitle>{pokemonData?.name}</CardTitle>
        {
           pokemonData && pokemonData.abilities?.map((ability: IPokemonAbility) => (
                <CardContent key={ability.ability.name}>{ ability.ability.name }</CardContent>
            ))
        }
    </CardContainer>
  );
}
