import React from "react";

function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true)
  }, []);

  return [isMounted];
}