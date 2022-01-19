import { FunctionComponent, useEffect, useState } from "react";

export default function ClientOnly({ children, ...delegated }:any) {
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

  return <div {...delegated}>{children}</div>;
}