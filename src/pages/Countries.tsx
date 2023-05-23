import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

type Country = {
  name: string;
  emoji: string;
};
const GET_COUNTRIES = gql`
  query getCountriesByContinentCode($code: ID!) {
    continent(code: $code) {
      name
      countries {
        name
        emoji
      }
    }
  }
`;

const Countries = () => {
  const { code } = useParams();
  const { data } = useQuery(GET_COUNTRIES, {
    variables: { code },
  });

  console.log(data?.continent.countries);
  return (
    <>
      <h1>Countries</h1>
      <div>
        {data?.continent.countries.map((country: Country) => {
          return (
            <p key={country.name}>
              {country.name} {country.emoji}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Countries;
