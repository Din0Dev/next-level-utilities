import CustomHookModel from "models/custom-hook.model";

export const customHook: CustomHookModel[] = [
  {
    name: "useToggle",
    description:
    "Basically, what this hook does is that, it takes a parameter with value true or false and toggles that value to opposite. It's useful when we want to take some action into it's opposite action, for example: show and hide modal, show more/show less text, open/close side menu.",
    code: `
    import { useCallback, useState } from 'react';
      // Usage
      function App() {
          // Call the hook which returns, current value and the toggler function
          const [isTextChanged, setIsTextChanged] = useToggle();
          return (
              <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
          );
      }
      // Hook
      // Parameter is the boolean, with default "false" value
      const useToggle = (initialState: boolean = false): [boolean, any] => {
          // Initialize the state
          const [state, setState] = useState<boolean>(initialState);
          // Define and memorize toggler function in case we pass down the comopnent,
          // This function change the boolean value to it's opposite value
          const toggle = useCallback((): void => setState(state => !state), []);
          return [state, toggle]
      }
    `,
    codeTS: `
    import { useState, useEffect, useRef } from "react";
        // Usage
        function App() {
          // State value and setter for our example
          const [count, setCount] = useState<number>(0);
          // Get the previous value (was passed into hook on last render)
          const prevCount: number = usePrevious<number>(count);
          // Display both current and previous count value
          return (
            <div>
              <h1>
                Now: {count}, before: {prevCount}
              </h1>
              <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
          );
        }
        // Hook
        function usePrevious<T>(value: T): T {
          // The ref object is a generic container whose current property is mutable ...
          // ... and can hold any value, similar to an instance property on a class
          const ref: any = useRef<T>();
          // Store current value in ref
          useEffect(() => {
            ref.current = value;
          }, [value]); // Only re-run if value changes
          // Return previous value (happens before update in useEffect above)
          return ref.current;
        }
    `,
    tags: "useToggle, toggle",
    linkDemo: "https://codesandbox.io/s/recursing-cori-ckw8p",
  },
  {
    name: "useOnClickOutside",
    description:
    "This hook allows you to detect clicks outside of a specified element. In the example below we use it to close a modal when any element outside of the modal is clicked. By abstracting this logic out into a hook we can easily use it across all of our components that need this kind of functionality (dropdown menus, tooltips, etc).",
    code: `
    import { useState, useEffect, useRef } from "react";
      // Usage
      function App() {
        // Create a ref that we add to the element for which we want to detect outside clicks
        const ref = useRef();
        // State for our modal
        const [isModalOpen, setModalOpen] = useState(false);
        // Call hook passing in the ref and a function to call on outside click
        useOnClickOutside(ref, () => setModalOpen(false));
        return (
          <div>
            {isModalOpen ? (
              <div ref={ref}>
                👋 Hey, I'm a modal. Click anywhere outside of me to close.
              </div>
            ) : (
              <button onClick={() => setModalOpen(true)}>Open Modal</button>
            )}
          </div>
        );
      }
      // Hook
      function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }
              handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
              document.removeEventListener("mousedown", listener);
              document.removeEventListener("touchstart", listener);
            };
          },
          // Add ref and handler to effect dependencies
          // It's worth noting that because passed in handler is a new ...
          // ... function on every render that will cause this effect ...
          // ... callback/cleanup to run every render. It's not a big deal ...
          // ... but to optimize you can wrap handler in useCallback before ...
          // ... passing it into this hook.
          [ref, handler]
        );
      }
    `,
    tags: "useOnClickOutside, click",
    linkDemo: "https://codesandbox.io/s/23jk7wlw4y",
  },
  {
    name: "usePrevious",
    description:
    "One question that comes up a lot is 'When using hooks how do I get the previous value of props or state?'. With React class components you have the componentDidUpdate method which receives previous props and state as arguments or you can update an instance variable (this.previous = value) and reference it later to get the previous value. So how can we do this inside a functional component that doesn't have lifecycle methods or an instance to store values on? Hooks to the rescue! We can create a custom hook that uses the useRef hook internally for storing the previous value. See the recipe below with inline comments. You can also find this example in the official React Hooks FAQ.",
    code: `
    import { useState, useEffect, useRef } from "react";
      // Usage
      function App() {
        // Create a ref that we add to the element for which we want to detect outside clicks
        const ref = useRef();
        // State for our modal
        const [isModalOpen, setModalOpen] = useState(false);
        // Call hook passing in the ref and a function to call on outside click
        useOnClickOutside(ref, () => setModalOpen(false));
        return (
          <div>
            {isModalOpen ? (
              <div ref={ref}>
                👋 Hey, I'm a modal. Click anywhere outside of me to close.
              </div>
            ) : (
              <button onClick={() => setModalOpen(true)}>Open Modal</button>
            )}
          </div>
        );
      }
      // Hook
      function useOnClickOutside(ref, handler) {
        useEffect(
          () => {
            const listener = (event) => {
              // Do nothing if clicking ref's element or descendent elements
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }
              handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
              document.removeEventListener("mousedown", listener);
              document.removeEventListener("touchstart", listener);
            };
          },
          // Add ref and handler to effect dependencies
          // It's worth noting that because passed in handler is a new ...
          // ... function on every render that will cause this effect ...
          // ... callback/cleanup to run every render. It's not a big deal ...
          // ... but to optimize you can wrap handler in useCallback before ...
          // ... passing it into this hook.
          [ref, handler]
        );
      }
    `,
    codeTS: `
    import { useState, useEffect, useRef } from "react";
      // Usage
      function App() {
        // State value and setter for our example
        const [count, setCount] = useState<number>(0);
        // Get the previous value (was passed into hook on last render)
        const prevCount: number = usePrevious<number>(count);
        // Display both current and previous count value
        return (
          <div>
            <h1>
              Now: {count}, before: {prevCount}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        );
      }
      // Hook
      function usePrevious<T>(value: T): T {
        // The ref object is a generic container whose current property is mutable ...
        // ... and can hold any value, similar to an instance property on a class
        const ref: any = useRef<T>();
        // Store current value in ref
        useEffect(() => {
          ref.current = value;
        }, [value]); // Only re-run if value changes
        // Return previous value (happens before update in useEffect above)
        return ref.current;
      }
    `,
    tags: "usePrevious, previous",
    linkDemo: "https://codesandbox.io/s/pwnl6v7z6m",
  },
];
