import useFetch from "../../hooks/useFetch"

const PlanetDetail = () => {
  const id = 1;
  const url = `https://swapi.dev/api/planets/${id}`
  const {data: planet, isLoading, error} = useFetch(url)

  if (isLoading) {
    return <p>Loading...</p>
  }
  else if (error) {
    return <p>an error occured</p>
  }
  else {
    const {name, climate, gravity, population} = planet
    return (
      <div>
        <h3>Name: {name}</h3>
        <p>{climate}</p>
        <p>{gravity}</p>
        <p>{population}</p>
      </div>
    )
  }
}

export default PlanetDetail