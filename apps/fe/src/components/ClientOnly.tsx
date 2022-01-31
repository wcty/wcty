import { FunctionComponent, ReactNode, useEffect, useState } from "react";

export default function ClientOnly({ 
  children = ()=><></> , 
  ...delegated 
}:{
  children?:ReactNode|((args:any)=>ReactNode), 
  delegated?:any
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      setHasMounted(true);

    }
  }, []);

  if (!hasMounted) {
    return null;
  }

  if(typeof children === 'function'){
    return children(delegated);
  }else{
    return children;
  }

}