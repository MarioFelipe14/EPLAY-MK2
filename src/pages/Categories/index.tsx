import ProductsList from '../../components/ProductsList'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRPGGameQuery,
  useGetSimulationGameQuery,
  useGetSportGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGameQuery()
  const { data: figthGames } = useGetFightGameQuery()
  const { data: rpgGames } = useGetRPGGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()
  const { data: sportGames } = useGetSportGameQuery()

  if (actionGames && sportGames && figthGames && rpgGames && simulationGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes " background="gray" />
        <ProductsList games={figthGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }
  return <h4>Carregando</h4>
}
export default Categories
