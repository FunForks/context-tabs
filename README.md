# PageContext #

A simple [demo](https://funforks.github.io/context-tabs) on how to use a React Context to create a set of tab buttons.

State is shared between three sibling components using a `useContext` hook. No `props` are needed.

---

The main App component imports three components from the `components` folder, via `./components/index.jsx`. It renders these components in a column:

```
  <Header />
  <Page />
  <Footer />
```

It also imports a provider component from `./contexts/PageContext.jsx`. This provider gives access to the variables and functions defined by a `PageContext` component. Any child of the provider component can use React's `useContext` hook to read from the `value` prop sent by the PageContext.

```
export const App = () => {

  return (
    <PageProvider>
      <Header /> // can access PageContext
      <Page />   // can access PageContext
      <Footer /> // can access PageContext
    </PageProvider>
  )
}
```

The `PageContext` object provides a variable (`page`) and function (`setPage`), which are managed by a `useState` hook.

The buttons in the `<Footer />` component can call `setPage`; the `<Header />` and `<Page />` components can read the value of `page`.

The `<Header />` component simply displays the value of `page`.

The `<Page />` component uses a `switch` statement to determine which _other_ component to return.

---

This technique means that:
* The business logic can be contained in a custom script, rather than in the App component.
* The App component does not need to send any props to its children
* A change made in one component (the `<Footer />`) is communicated immediately to other components which are not its children.