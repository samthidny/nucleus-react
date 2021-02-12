import React from 'react'

export default function BackButton() {
  return (
    <div>
      <ns-cta id="back-button" type="text" href="javascript:history.back()" icon="arrow-left" loading="false">Go back</ns-cta>
    </div>
  )
}
