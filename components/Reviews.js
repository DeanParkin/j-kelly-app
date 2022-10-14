//GET
// https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews

export default function Reviews() {
  return <div>Reviews</div>;
}

// export const getStaticProps = async () => {
//   const apiUrl = `https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews`;
//   const data = await fetch(apiUrl);
//   const reviews = await data.json();

//   return {
//     props: {
//       reviews,
//     },
//     revalidate: 3600,
//   };
// };
