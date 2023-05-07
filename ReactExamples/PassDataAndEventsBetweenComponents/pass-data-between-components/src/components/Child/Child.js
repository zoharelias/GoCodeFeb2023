import React from 'react'
import { Button } from 'semantic-ui-react';

export default function Child({parentToChild}) {
    return (
        <div>
            {parentToChild}
        </div>
    )
}