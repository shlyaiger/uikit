import { Example } from '@consta/stand';
import React, { useState } from 'react';

import { Select } from '##/components/SelectCanary';

export const SelectExampleCustomTypes = () => {
  const [value, setValue] = useState<string | null>();
  return (
    <Example col={1}>
      <Select
        placeholder="Выберите значение"
        items={['Первый', 'Второй', 'Третий']}
        value={value}
        onChange={setValue}
        getItemKey={(item) => item}
        getItemLabel={(item) => item}
      />
    </Example>
  );
};

// Example 2

export type Item = {
  name: string;
  group: string;
};

export const items: Item[] = [
  { name: 'Первый', group: 'Первая группа' },
  { name: 'Второй', group: 'Третья группа' },
  { name: 'Третий', group: 'Вторая группа' },
  { name: 'Четвертый', group: 'Первая группа' },
  { name: 'Пятый', group: 'Первая группа' },
  { name: 'Шестой', group: 'Третья группа' },
  { name: 'Седьмой', group: 'Первая группа' },
  { name: 'Восьмой', group: 'Вторая группа' },
  { name: 'Девятый', group: 'Третья группа' },
  { name: 'Десятый', group: 'Вторая группа' },
];

export const groups: string[] = [
  'Первая группа',
  'Вторая группа',
  'Третья группа',
];

export const SelectExampleCustomTypesWithGroups = () => {
  const [value, setValue] = useState<Item | null>();
  return (
    <Example col={1}>
      <Select
        placeholder="Выберите значение"
        items={items}
        groups={groups}
        value={value}
        onChange={setValue}
        getItemKey={(item) => item.name}
        getItemLabel={(item) => item.name}
        getItemGroupKey={(item) => item.group}
        getGroupKey={(group: string) => group}
        getGroupLabel={(group: string) => group}
      />
    </Example>
  );
};
