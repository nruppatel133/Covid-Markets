function useWindowSize() {
    const [width, setWidth] = React.useState(document.documentElement.clientWidth);
    const [height, setHeight] = React.useState(document.documentElement.clientHeight);
    React.useEffect(() => {
      const setSize = () => {
        setWidth(document.documentElement.clientWidth);
        setHeight(document.documentElement.clientHeight);
      };