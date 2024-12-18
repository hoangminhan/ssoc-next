import React from 'react';

type Props = {
  infoWeb: string;
};

const AboutSSOC = ({ infoWeb }: Props) => {
  const a = 123;
  return (
    <div>
      {infoWeb}
      <p>about ssoc</p>
    </div>
  );
};
export default AboutSSOC;
