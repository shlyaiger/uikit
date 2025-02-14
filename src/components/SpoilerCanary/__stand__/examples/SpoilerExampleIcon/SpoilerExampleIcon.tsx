import { IconAdd } from '@consta/icons/IconAdd';
import { IconRemove } from '@consta/icons/IconRemove';
import { Example } from '@consta/stand';
import React from 'react';

import { Spoiler } from '##/components/SpoilerCanary';

export const SpoilerExampleIcon = () => {
  return (
    <Example col={1}>
      <Spoiler lineClamp={3} lessIcon={IconRemove} moreIcon={IconAdd}>
        Проснувшись однажды утром после беспокойного сна, Грегор Замза
        обнаружил, что он у себя в постели превратился в страшное насекомое.
        Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову,
        свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на
        верхушке которого еле держалось готовое вот-вот окончательно сползти
        одеяло. Его многочисленные, убого тонкие по сравнению с остальным телом
        ножки беспомощно копошились у него перед глазами. «Что со мной
        случилось?» – подумал он.
      </Spoiler>
    </Example>
  );
};
