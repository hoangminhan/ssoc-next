'use client';

import { useAppContext } from '@hooks/use-app-context';

type Props = {};

function SwitchTheme({}: Props) {
  const { handleSwitchTheme } = useAppContext();
  return (
    <div className="flex gap-5">
      <button
        className="text-text"
        onClick={() => {
          handleSwitchTheme('light');
        }}
      >
        light
      </button>
      <button
        className="text-text"
        onClick={() => {
          handleSwitchTheme('dark');
        }}
      >
        dark
      </button>
    </div>
  );
}

export default SwitchTheme;
