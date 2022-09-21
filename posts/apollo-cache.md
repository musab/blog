---
title: Manually updating Apollo Client cache on react-query mutation
publish_date: 2022-09-21
---

This was a bit of a pain to figure out, so I'm writing it down here for future reference. Here is a simple example of manually updating the Apollo Client cache on a react-query mutation.

I want to update the Apollo Client cache so that the "TODO" has the correct `completed` state. In this example, I'll have an Apollo `useQuery` that fetches the list of "TODOs." And a react-query `useMutation` that completes a "TODO."

We have a component that lists all the "TODOs" and a button to complete the "TODO."

```tsx
// <Todos /> component
const Todos = ({}) => {
  // fetch list of TODOs via Apollo Client
  const { data, loading, error } = useQuery(TODOS_QUERY);

  // complete TODO via react-query Mutation
  const { mutate: setCompleted } = useCompleteTODO();

  <table>
    <tr>
      <th>TODO</th>
      <th>Status</th>
      <th></th>
    </tr>
    {data.map((todo) => (
      <tr>
        <td>{todo.title}</td>
        <td>{todo.completed ? "Completed" : "Not completed"}</td>
        <td>
          <button onClick={() => setCompleted(todo.id)}>Complete</button>
        </td>
      </tr>
    ))}
  </table>;
};
```

And now here is how the `setCompleted` hook looks like.

```tsx
// useCompleteTODO.ts
import { gql, useApolloClient } from "@apollo/client";

const useCompleteTODO = () => {
  const apolloClient = useApolloClient();

  const mutation = useMutation(
    (id: string) => {
      // complete TODO via API
      return api.completeTODO(id);
    },
    {
      onSuccess: () => {
        apolloClient.writeFragment({
          id: `Todo:${id}`,
          fragment: gql`
            fragment myTodo on TODO {
              completed
            }
          `,
          data: {
            completed: true,
          },
        });
      },
    }
  );

  return { mutate: mutation.mutate };
};
```

If you're wondering why we are using both Apollo Client and react-query, it results from tech debt..
