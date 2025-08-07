# React `useEffect` Anti-Patterns

This project demonstrates common anti-patterns when using the `useEffect` hook in React.
Each anti-pattern is presented as a separate component for clarity.

## How to Run

1.  Navigate to the `project` directory:
    ```bash
    cd 2025-08-07/project
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Anti-Patterns Demonstrated

### 1. Missing Dependency in `useEffect`
-   **File**: `app/components/MissingDependency.tsx`
-   **Description**: The `useEffect` hook depends on the `count` state, but it's missing from the dependency array. This causes the effect to only run once on mount, and not when the `count` state changes.

### 2. No Cleanup in `useEffect`
-   **File**: `app/components/NoCleanup.tsx`
-   **Description**: A `setInterval` is set up in `useEffect` but is never cleaned up in the return function. This can lead to memory leaks as the interval will continue to run even after the component has unmounted.

### 3. Incorrect Dependency (Object/Function)
-   **File**: `app/components/IncorrectDependency.tsx`
-   **Description**: The `useEffect` hook depends on an object that is re-created on every render. This causes the effect to run on every render, not just when the object's contents have changed. The solution is to memoize the object using `useMemo` or `useCallback`.
