import { gql, useQuery } from "@apollo/client";

type Continent = {
  name: string;
};
const GET_CONTINENTS = gql`
  query getContinents {
    continents {
      name
    }
  }
`;

const Continents = () => {
  const { data } = useQuery(GET_CONTINENTS, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <>
      <h1>Continents</h1>
      <div>
        {data?.continents.map((continent: Continent) => {
          return <p key={continent.name}>{continent.name}</p>;
        })}
      </div>
    </>
  );
};

export default Continents;
