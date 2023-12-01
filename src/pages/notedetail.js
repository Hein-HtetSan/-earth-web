import React from 'react';
// import our GraphQL dependencies
import { useQuery } from '@apollo/client';

// import the Note component
// import Note from '../components/Note';
// import NoteDetail from '../components/NoteDetail';
import { GET_NOTE_DETAIL } from '../gql/query';
import NoteDetail from '../components/NoteDetail';

const NoteDetailPage = props => {
  // store the id found in the url as a variable
  let id = props.match.params.id;

  // query hook, passing the id value as a variable
  const { loading, error, data } = useQuery(GET_NOTE_DETAIL, { variables: { id } });

  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error! Note not found: {error.message}</p>;

  // if the data is successful, display the data in our UI
  return <NoteDetail note={data.note} />;
};

export default NoteDetailPage;