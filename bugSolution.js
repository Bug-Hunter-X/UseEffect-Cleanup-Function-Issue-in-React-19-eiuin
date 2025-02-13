```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let isMounted = true;
    console.log('Mounted!');
    return () => {
      isMounted = false;
      console.log('Unmounted!');
    };
  }, []);

  useEffect(() => {
    return () => {
      setMounted(false);
    }
  }, []);

  return (
    <div>
      {mounted && (
        <>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
      )}
    </div>
  );
}
```