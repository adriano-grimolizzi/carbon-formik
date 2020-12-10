import React, { useState } from "react";

import Button from "carbon-react/lib/components/button";
import Dialog from "carbon-react/lib/components/dialog";

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>Open Dialog</Button>
      <Dialog 
        open={isOpen}
        onCancel={()=> setIsOpen(false)}
        title='Super Title'
        subtitle='Super Subtitle...'>
            <p>Vamos a la playa...</p>
        </Dialog>
    </>
  );
};

export default DialogExample;