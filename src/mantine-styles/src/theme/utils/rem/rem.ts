type PixelUnit = number | `${number}px`;

function createConverter(units: 'rem' | 'em') {
  return (px: PixelUnit) => {
    if (typeof px === 'number') {
      return `${px / 16}${units}`;
    }

    const replaced = px.replace('px', '');
    if (!Number.isNaN(Number(replaced))) {
      return `${Number(replaced) / 16}${units}`;
    }

    return px;
  };
}

export const rem = createConverter('rem');
export const em = createConverter('em');
