import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

export default function TermsAndConditions() {
    return (
        <div>
            <Checkbox
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      Acepto los términos y condiciones.
        </div>
    )
}
