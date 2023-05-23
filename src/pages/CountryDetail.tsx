import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_COUNTRY_DETAIL = gql`
  query getCountryDetail($code: ID!) {
    country(code: $code) {
      name
      capital
      currency
      emoji
    }
  }
`;

const CountryDetail = () => {
  const { code } = useParams();
  const { data } = useQuery(GET_COUNTRY_DETAIL, {
    variables: { code },
  });

  return (
    <>
      <h1>Country Detail</h1>
      <div>
        <p>{data?.country.name}</p>
        <p>{data?.country.emoji}</p>
        <p>{data?.country.capital}</p>
        <p>{data?.country.currency}</p>
      </div>
    </>
  );
};

export default CountryDetail;
