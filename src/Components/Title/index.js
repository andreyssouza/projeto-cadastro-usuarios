import React from 'react';

import { H1 } from './styles'

function Title(Props) {

    return (
        <H1>{Props.children}</H1>
    )
}

export default Title;

// OU FAZENDO A DESESTRUTURAÇÃO PODEMOS USAR SOMENTE {CHILDREN} NO LUGAR DE PROPS.CHILDREN 