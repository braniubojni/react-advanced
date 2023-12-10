type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods).reduce((acc, [cls, value]) => {
      !!value && acc.push(cls);
      return acc;
    }, []),
  ].join(' ');
}

classNames('remove-btn', { hovered: true, selectable: true, red: false }, [
  'pdg',
]);
