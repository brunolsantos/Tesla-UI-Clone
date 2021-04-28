import React, { useEffect, useRef } from 'react';

import { Container } from './styles';
import useModel from '../useModel';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode
  lastModel: boolean
}

const ModelSection: React.FC<Props> = ({
  modelName, 
  overlayNode, 
  children,
  lastModel,
  ...props
}) => {
  const { registerModel } = useModel(modelName);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current ) {
      registerModel({modelName, overlayNode, sectionRef, lastModel});
    }
  }, [registerModel, modelName, overlayNode, sectionRef, lastModel])

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
}

export default ModelSection;