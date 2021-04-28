import React from 'react';

import UniqueOverlay from '../UniqueOverlay';
import DefaultOverlayContent from "../DefaultOverlayContent";
import {ModelSection, ModelsWrapper} from "../Model";

import { Container, Spacer } from './styles';

const Page: React.FC = () => {
  const models = [
    'Model One',
    'Model Two',
    'Model Three',
    'Model Four',
    'Model Five',
    'Model Six',
    'Model Seven',
  ];
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {models.map((modelName, index) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              lastModel={models.length-1 === index}
              overlayNode={
                <DefaultOverlayContent 
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
}

export default Page;